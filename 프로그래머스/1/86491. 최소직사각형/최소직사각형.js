function solution(sizes) {
    let maxW = 0;
    let maxH = 0;
    
    sizes.forEach(([w, h]) => {
        if (w < h) [w, h] = [h, w];
        if (w > maxW) maxW = w;
        if (h > maxH) maxH = h;
    })
    return maxW * maxH
}