
varying vec3 vNormal; 
varying vec3 vColor; 

uniform vec3 lightDir;  

void main(void) {
    vec3 N = normalize(vNormal);
    vec3 normalizedLightDir = normalize(lightDir);
    float diffuse = max(0.2, dot(normalizedLightDir, N));
    gl_FragColor = vec4(vColor * diffuse, 1.0);
}
