in vec3 vColor;
in float vStrength;

uniform vec3 lightDir;

void main(void)
{
    // calculate normal from texture coordinates
    vec3 N;
    N.xy = gl_PointCoord* 2.0 - vec2(1.0);    
    float mag = dot(N.xy, N.xy);
    if (mag > 1.0) discard;   // kill pixels outside circle
    N.z = sqrt(1.0-mag);

    // calculate lighting
    float diffuse = max(0.2, dot(lightDir, N));
    gl_FragColor = vec4(vColor,1) * diffuse/1.5;
}
