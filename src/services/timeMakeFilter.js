async function timeMakeFilter() {
    try {
        const timeToCookOptions = ["All", "Less than 15 minutes", "15-30 minutes", "More than 30 minutes"];
        return timeToCookOptions;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

module.exports = {
    timeMakeFilter
};