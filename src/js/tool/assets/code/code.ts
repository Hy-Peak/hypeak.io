export const svgCode = ` /**
     * 把 svg 转换 png
     * @param svgElement
     * @param width
     * @param height
     */
    function convertSvgToPng(svgElement, width, height, callback) {
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');

        // 将 SVG 转换成 DataURL
        const data = new XMLSerializer().serializeToString(svgElement);
        const svg = new Blob([data], {type: 'image/svg+xml;charset=utf-8'});
        const url = URL.createObjectURL(svg);

        const img = new Image();
        img.onload = function () {
            ctx.drawImage(img, 0, 0);
            URL.revokeObjectURL(url);
            const png = canvas.toDataURL('image/png');
            callback(png);
        };
        img.src = url;
    }

    document.querySelector('#app').addEventListener('click', starts)

    function starts() {
        const svg = document.querySelector('svg');
        convertSvgToPng(svg, 2000, 2000, function (png) {
            const img = document.createElement('img');
            // 缩小
            img.src = png;
            img.style.width = '100px'
            img.style.height = '100px'
            document.body.appendChild(img);
        });
    }`;
