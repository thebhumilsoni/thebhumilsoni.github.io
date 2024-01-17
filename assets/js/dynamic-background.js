const getThemeColors = () => {
    return {
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
            "number": { "value": 120 },
            "color": { "value": particleColor },
            "shape": { "type": "circle" },
            "opacity": { "value": 0.7 },
            "size": { "value": 2.5 },
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