// Fragment Shader
varying vec3 vNormal;  // Interpolated normal from the vertex shader
varying vec3 vColor;   // Color from the vertex shader

uniform vec3 lightDir;  // Light direction (should be normalized)
// uniform float vOpacity; // Opacity

void main(void)
{
    // Normalize the interpolated normal
    vec3 N = normalize(vNormal);
    
    // Normalize the light direction
    vec3 normalizedLightDir = normalize(lightDir);
    
    // Calculate the diffuse component based on the dot product of normal and light direction
    float diffuse = max(0.2, dot(normalizedLightDir, N));

    // Apply diffuse lighting to the color
    gl_FragColor = vec4(vColor * diffuse, 1.0);
}
