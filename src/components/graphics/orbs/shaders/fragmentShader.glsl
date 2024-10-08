in vec3 vColor;
in float vOpacity;

uniform vec3 lightDir;

void main(void) {
    vec3 N;
    N.xy = gl_PointCoord * 2.0 - vec2(1.0);    
    float mag = dot(N.xy, N.xy);
    if (mag > 1.0) discard;
    N.z = sqrt(1.0 - mag);

    float diffuse = max(0.2, dot(lightDir, N)); 
    float linePattern = step(0.48, fract(gl_PointCoord.y * 10.0));
    vec3 lineColor = mix(vColor, vec3(0.0), linePattern/10.0);
    vec3 finalColor = mix(lineColor, vec3(0.38,0.38,0.38), (1.0-vOpacity));
    finalColor = lineColor;

    gl_FragColor = vec4(finalColor, 1) * diffuse / 1.5;
    
}
