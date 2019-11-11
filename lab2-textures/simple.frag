#version 420

// required by GLSL spec Sect 4.5.3 (though nvidia does not, amd does)
precision highp float;


// >>> @task 3.4
layout(binding = 0) uniform sampler2D colortexture;
layout(location = 0) out vec4 fragmentColor;
in vec3 outColor;
in vec2 texCoord;

void main()
{
	// >>> @task 3.5
	fragmentColor = texture2D(colortexture, texCoord.xy);
	//fragmentColor.rgb = outColor; 
}