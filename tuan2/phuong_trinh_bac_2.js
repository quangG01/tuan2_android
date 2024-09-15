const giaiPhuongTrinhBacHai = (a, b, c) => {
    
    let delta = b * b - 4 * a * c;

    if (delta > 0) {
       
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        return `Phương trình có hai nghiệm phân biệt: x1 = ${x1}, x2 = ${x2}`;
    } else if (delta === 0) {
        
        let x = -b / (2 * a);
        return `Phương trình có nghiệm kép: x = ${x}`;
    } else {
        
        return "Phương trình vô nghiệm";
    }
};