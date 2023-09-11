const calculateCoordinates = () => {
    const cash = {};
    return (r, s, h) => {
        if (`r${r}s${s}h${h}` in cash) {
            return cash[`r${r}s${s}h${h}`];
        } else {
            const coordinates = [];
            for (let i = 0; i < s; i++) {
                coordinates.push({
                    x: r * Math.cos(2 * Math.PI * i / s),
                    y: r * Math.sin(2 * Math.PI * i / s),
                    z: 0
                });
            };
            cash[`r${r}s${s}h${h}`] = coordinates;
            return coordinates;
        }
    }
}
const closureCalculate  = calculateCoordinates();
export default closureCalculate