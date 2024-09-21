uniform float uRadius;
uniform float uTime;
uniform float uSizeMin; 
uniform float uSizeMax; 
uniform vec3 uColor;
uniform float uSpeed;

attribute float aSeed;

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
    float r = fract(sin(seed) * 43758.5453123);
    float g = fract(sin(seed + 1.0) * 43758.5453123);
    float b = fract(sin(seed + 2.0) * 43758.5453123);

    return vec3(r, g, b);
}

float randomInRange(float seed, float x, float y) {
  float pseudoRandom = fract(sin(seed * 12.9898) * 43758.5453);
  return x + (y - x) * pseudoRandom;
}

vec3 randomMovement(float seed, vec3 pos, float time, float speed) {
    float xMovement = sin(time * speed * 0.001 + seed) * 0.5;
    float yMovement = sin(time * speed * 0.001 + seed + 1.0) * 0.5;
    float zMovement = sin(time * speed * 0.001 + seed + 2.0) * 0.5;

    return pos + vec3(xMovement, yMovement, zMovement);
}

out vec3 vColor;
out float vOpacity;

void main() {
    vColor = mix(uColor, randomColor(aSeed), randomInRange(aSeed, 0.2, 0.5));

    float distanceFactor = pow(uRadius / 5.0 - distance(position, vec3(0.0)), 1.5);

    vec3 pos = position * rotation3dX(-uTime * 0.0002 * distanceFactor);
    pos = randomMovement(aSeed, pos, uTime, uSpeed);

    vec4 modelPosition = modelMatrix * vec4(pos, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    float distanceFromCamera = length(viewPosition.xyz-pos);

    float maxDistance = 30.0;
    float fadeDistance = 25.0;
    vOpacity = clamp(maxDistance - distanceFromCamera , 0.0, fadeDistance)/fadeDistance;

    float size = randomInRange(aSeed, uSizeMax, uSizeMin);

    gl_Position = projectedPosition;
    gl_PointSize = size;
}
