/*
Add below scripts to base.html before the end of body tag

<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.waves.min.js"></script>
<script src="{{ '/assets/js/dynamic-backgrounds/dynamic-background-vanta.js' | relative_url }}"></script>
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

let vantaEffect;

const initOrUpdateDynamicBackground = () => {
    const { backgroundColor } = getThemeColors();
    const element = "#dynamic-background"

    if (vantaEffect) {
        vantaEffect.destroy();
    }

    vantaEffect = getVantaEffect(backgroundColor, element);
};

const getVantaEffect = (color, element) => {
    return VANTA.WAVES({
        el: element,
        color: color,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        shininess: 0.00,
        waveHeight: 14.00
    });
}

document.addEventListener('DOMContentLoaded', initOrUpdateDynamicBackground);
document.addEventListener('themeChange', initOrUpdateDynamicBackground);
