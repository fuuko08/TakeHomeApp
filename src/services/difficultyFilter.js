async function DifficultyFilter() {
    try {
        const DifficultyOptions = ["Any", "Easy", "Medium"];
        return DifficultyOptions;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

module.exports = {
    DifficultyFilter
};