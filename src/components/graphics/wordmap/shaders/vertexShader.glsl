
uniform float uTime;
uniform bool uSelected;

mat3 rotation3dY(float angle) {
  float s = sin(angle);
  float c = cos(angle);
  return mat3(
    c, 0.0, -s,
    0.0, 1.0, 0.0,
    s, 0.0, c
  );
}

varying vec3 vColor;
varying vec3 vNormal;

void main() {
    vColor = vec3(0.3, 0.8, 1.0);
    vNormal = normalize(normalMatrix * normal);
   
    vec3 pos = position;
    if (uSelected) {
      vColor = vec3(1.0, 0.8, 1.0);
      position * rotation3dY(uTime*0.002);
    }

    vec4 modelPosition = modelMatrix * vec4(pos, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    gl_Position = projectedPosition;
}
