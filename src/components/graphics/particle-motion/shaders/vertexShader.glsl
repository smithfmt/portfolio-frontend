
uniform float uRadius;
uniform float uTime;
uniform float uSizeMin; 
uniform float uSizeMax; 
uniform vec3 cameraDirection;
uniform vec3 mousePosition;
uniform float forceDistanceThreshold; 
uniform float forceStrength;
uniform vec3 uColor;

attribute float aSeed;
attribute vec3 aCube;
attribute vec3 aSphere;
attribute vec3 aRandom;
attribute vec3 aDoDeca;


vec3 randomGeometryAlgorithm(vec3 p) {
    float x2 = p.x * p.x;
    float y2 = p.y * p.y;
    float z2 = p.z * p.z;
    vec3 newPos = vec3(
        p.x * sqrt(1.0 - (y2 + z2) / 2.0 + (y2 * z2) / 3.0),
        p.y * sqrt(1.0 - (x2 + z2) / 2.0 + (x2 * z2) / 3.0),
        p.z * sqrt(1.0 - (x2 + y2) / 2.0 + (x2 * y2) / 3.0)
    );
    return newPos;
}

float nonLinearTimeline(float time, float minSpeed, float maxSpeed, float cycleDuration, float edgeSoftness) {
    float phase = mod(time / cycleDuration * 6.28318530718, 6.28318530718);
    float normalizedSpeed = 0.5 * (sin(phase) + 1.0);
    float t = normalizedSpeed; 
    float softFactor = 1.0 - edgeSoftness * abs(t - 0.5);
    return minSpeed + (maxSpeed - minSpeed) * normalizedSpeed * softFactor;
}

float randomInRange(float seed, float x, float y) {
  float pseudoRandom = fract(sin(seed * 12.9898) * 43758.5453);
  return x + (y - x) * pseudoRandom;
}

out vec3 vColor;
out float vStrength;

void main() {
    vColor = uColor;

    // Define the Timeline
    float minTimelineValue = -20.0;
    float maxTimelineValue = 20.0;
    float minSpeed = 0.5;
    float maxSpeed = 1.5;
    float cycleDuration = 20.0;
    float edgeSoftness = 0.2;
    float phases = 2.0;

    float timeline = nonLinearTimeline(uTime, minSpeed, maxSpeed, cycleDuration, edgeSoftness);
    float scaledTimeline = minTimelineValue + (maxTimelineValue - minTimelineValue) * timeline;

    vec3 pos = normalize(position);
    vec3 targetPos = randomGeometryAlgorithm(pos);
    
    pos = mix(pos, targetPos, scaledTimeline);

    vec3 lineToPoint = pos - mousePosition;

    float t = dot(lineToPoint, cameraDirection);  
    vec3 closestPointOnLine = mousePosition + t * cameraDirection;

    float dist = length(pos - closestPointOnLine);

    float forceDist = forceDistanceThreshold;
    vStrength = 0.0;
    if (dist < forceDist) {
        float force = 1.0 - (dist / forceDist);
        vec3 forceDirection = -normalize(pos - closestPointOnLine);
        pos += forceDirection * force * forceStrength;
        vStrength = force;
    }
    
    vec4 modelPosition = modelMatrix * vec4(pos, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    float size = randomInRange(aSeed,uSizeMax,uSizeMin);
    gl_Position = projectedPosition;
    gl_PointSize = size;
}