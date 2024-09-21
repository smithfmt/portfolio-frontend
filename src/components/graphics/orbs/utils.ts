export const getCubePositions = (count:number, radius: number) => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        const x = (Math.random() - 0.5) * radius * 1/4;
        const y = (Math.random() - 0.5) * radius * 1/4;
        const z = (Math.random() - 0.5) * radius * 1/4;

        positions.set([x, y, z], i * 3);
    }
    return positions;
};

export const generateSeed = (index:number, count:number) => {
  return Math.sin(index) * count;
};
