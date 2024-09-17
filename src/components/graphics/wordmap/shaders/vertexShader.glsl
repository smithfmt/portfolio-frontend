
uniform float uTime;
uniform vec3 uColor;

mat3 rotation3dY(float angle) {
  float s = sin(angle);
  float c = cos(angle);
  return mat3(
    c, 0.0, -s,
    0.0, 1.0, 0.0,
    s, 0.0, c
  );
}

vec3 randomColor(float seed) {
    float r = fract(sin(seed) * 43758.5453123);
    float g = fract(sin(seed + 1.0) * 43758.5453123);
    float b = fract(sin(seed + 2.0) * 43758.5453123);

    return vec3(r, g, b);
}

out vec3 vColor;
varying vec3 vNormal;  // Normal to pass to the fragment shader

void main() {
    vColor = uColor;
    vNormal = normalize(normalMatrix * normal);
   
    // vec3 pos = position * rotation3dY(uTime * 1.0);
    vec3 pos = position * vec3(0.0,0.1,0.0)*uTime*0.002;
    pos = position;

    // Set New Position in space
    vec4 modelPosition = modelMatrix * vec4(pos, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    gl_Position = projectedPosition;
}
