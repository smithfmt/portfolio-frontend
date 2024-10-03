precision highp float;

uniform float uTime; // Time uniform for animation
uniform float uR; // Radius of the larger sphere
uniform float uSmallSphereRadius; // Radius of the smaller sphere

attribute vec3 velocity; // Velocity attribute from JavaScript
varying vec3 vColor;
varying vec3 vPosition;

vec3 randomVelocity(vec3 pos) {
    return normalize(vec3(
        fract(sin(dot(pos, vec3(12.9898, 78.233, 45.164))) * 43758.5453),
        fract(sin(dot(pos, vec3(93.9898, 67.234, 76.164))) * 24653.5453),
        fract(sin(dot(pos, vec3(45.9898, 23.233, 89.164))) * 13247.5453)
    )) * 2.0; 
}

void main() {
    vec3 pos = position;
    vec3 vel = velocity;

    if (length(pos) > uR) {
        vel = -vel;
    }
    pos += vel * uTime;

    vColor = color;
    vPosition = pos;

    vec4 modelPosition = modelMatrix * vec4(pos, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectionPosition = projectionMatrix * viewPosition;

    gl_Position = projectionPosition;
    gl_PointSize = 5.0;
}
