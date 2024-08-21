
attribute vec3 aColor;

out vec3 vColor;


void main() {

  vColor = aColor;

  // Set New Position in space
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  gl_Position = projectedPosition;
}
