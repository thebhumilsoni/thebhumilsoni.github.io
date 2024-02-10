/*
Add below scripts to base.html before the end of body tag

<script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
<script src="{{ '/assets/js/dynamic-backgrounds/dynamic-background-particles.js' | relative_url }}"></script>
*/

const getThemeColors = () => {
    return {
        backgroundColor: getComputedStyle(document.documentElement)
                            .getPropertyValue('--dynamic-background-color').trim(),
        primaryColor: getComputedStyle(document.documentElement)
                      .getPropertyValue('--dynamic-background-color-primary').trim(),
        secondaryColor: getComputedStyle(document.documentElement)
                        .getPropertyValue('--dynamic-background-color-secondary').trim()
    };
};

const initOrUpdateDynamicBackground = () => {
    const { primaryColor, secondaryColor } = getThemeColors();

    const backgroundConfig = getParticlesConfig(primaryColor, secondaryColor);
    particlesJS('dynamic-background', backgroundConfig);
};

const getParticlesConfig = (particleColor, particleLineColor) => {
    return {
        "particles": {
            "number": { "value": 50 },
            "color": { "value": particleColor },
            "shape": { "type": "circle" },
            "opacity": { "value": 0.7 },
            "size": { "value": 2 },
            "line_linked": {
                "enable": true,
                "color": particleLineColor
            },
            "move": { "enable": true, "speed": 3 }
        }
    };
};

document.addEventListener('DOMContentLoaded', initOrUpdateDynamicBackground);
document.addEventListener('themeChange', initOrUpdateDynamicBackground);