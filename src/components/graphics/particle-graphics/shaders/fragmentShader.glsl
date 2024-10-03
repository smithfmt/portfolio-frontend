precision mediump float;

uniform float uMinDistance;
uniform float uLineWidth;

varying vec3 vColor;
varying vec3 vPosition;

void main() {
    vec4 color = vec4(vColor, 1.0);
    float strength = distance(gl_PointCoord, vec2(0.5));
    strength = 1.0 - strength;
    strength = pow(strength, 2.0);
    color.rgb = mix(vec3(0.0), vColor, strength);
    gl_FragColor = vec4(color.rgb, strength);
}
