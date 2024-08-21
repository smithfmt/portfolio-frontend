
uniform float uRadius;
uniform float uTime;
uniform float uSizeMin; 
uniform float uSizeMax; 
uniform vec3 cameraDirection;
uniform vec3 mousePosition;
uniform float forceDistanceThreshold; 
uniform float forceStrength;
uniform vec3 uColor;
uniform sampler2D uVelocityTexture;
uniform float uDecayRate;

attribute float aSeed;


mat3 rotation3dY(float angle) {
  float s = sin(angle);
  float c = cos(angle);
  return mat3(
    c, 0.0, -s,
    0.0, 1.0, 0.0,
    s, 0.0, c
  );
}

mat3 rotation3dX(float angle) {
    float s = sin(angle);
    float c = cos(angle);

    return mat3(
        1.0, 0.0, 0.0,
        0.0, c, -s,
        0.0, s, c
    );
}

vec3 randomColor(float seed) {
    // A simple hash function to generate pseudo-random numbers
    float r = fract(sin(seed) * 43758.5453123);
    float g = fract(sin(seed + 1.0) * 43758.5453123);
    float b = fract(sin(seed + 2.0) * 43758.5453123);

    return vec3(r, g, b);
}

float randomInRange(float seed, float x, float y) {
  float pseudoRandom = fract(sin(seed * 12.9898) * 43758.5453);
  return x + (y - x) * pseudoRandom;
}

out vec3 vColor;
out float vStrength;
out vec4 vVelocityDecay;

void main() {
    // vColor = uColor;
    vColor = mix(uColor, randomColor(aSeed), randomInRange(aSeed, 0.2, 0.5));

    float distanceFactor = pow(uRadius / 5.0 - distance(position, vec3(0.0)), 1.5);
    vec3 pos = position * rotation3dX(-uTime * 0.0002 * distanceFactor);

    // pos = position; // TEMP FOR TESTING

    vec4 velocityAndTime = texture(uVelocityTexture, vec2(aSeed / 100.0, 0.0));
    vec3 velocity = velocityAndTime.rgb;
    float decayTime = velocityAndTime.a;


    // Add Force Based on Proximity to Mouse Position
    vec3 lineToPoint = pos - mousePosition;

    float t = dot(lineToPoint, cameraDirection);  
    vec3 closestPointOnLine = mousePosition + t * cameraDirection;

    float dist = length(pos - closestPointOnLine);

    float forceDist = forceDistanceThreshold;
    vStrength = 0.0;
    if (dist < forceDist) { // Is the Particle close to the mouse?
        float force = 1.0 - (dist / forceDist);
        vec3 forceDirection = -normalize(pos - closestPointOnLine);
        // set Velocity to the strenth
        velocity += forceDirection * force * forceStrength;
        decayTime = 1.0;
        vStrength = force;
    } else { // If not decay the residual velocity
        // velocity *= pow(uDecayRate, uTime); // Exponential decay
        // decayTime -= uTime; // Reduce the time/decay factor
        // decayTime = max(decayTime, 0.0); // Clamp to 0.0
    }

    pos += velocity * decayTime;

    vVelocityDecay = vec4(velocity,decayTime);

    // Set New Position in space
    vec4 modelPosition = modelMatrix * vec4(pos, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    // Add some size variation
    float size = randomInRange(aSeed,uSizeMax,uSizeMin);

    gl_Position = projectedPosition;
    gl_PointSize = size;
}
