class Student {
    constructor() {
        // Get data
        this.id = '';
        this.name = '';
        this.math = '';
        this.physical = '';
        this.chemistry = '';
        this.trainingMark = '';

        // Set method
        this.average = function () {
            return (Number(this.math) + Number(this.physical) + Number(this.chemistry)) / 3;
        }
        
        this.arrange_levels = function () {
            var average = Number(this.average());
            if (trainingMark < 5) {
                return "Fail!!!";
            } else {
                if (Number(average) > 0 && Number(average) >= 8 && Number(average) <= 10) {
                    return "Excellent!";
                } else if (Number(average) >= 7) {
                    return "Good!";
                } else if (Number(average) >= 5) {
                    return "Medium!";
                } else if (Number(average) < 5) {
                    return "Fail!";
                } else
                    return "None! Validation";
            }
        }
    }
}