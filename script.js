function plaseazaTurnuri() {
    const tabla = Array.from({ length: 8 }, () => Array(8).fill(0));

    function estePozitieValida(row, col) {
        for (let i = 0; i < col; i++) {
            if (tabla[row][i] === 1 || tabla[i][col] === 1 || tabla[i][col - i + row] === 1 || tabla[i][col + i - row] === 1) {
                return false;
            }
        }
        return true;
    }

    function plaseazaTurnuriRecursiv(col) {
        if (col === 8) {
            return true;
        }

        for (let i = 0; i < 8; i++) {
            if (estePozitieValida(i, col)) {
                tabla[i][col] = 1;

                if (plaseazaTurnuriRecursiv(col + 1)) {
                    return true;
                }

                tabla[i][col] = 0;
            }
        }

        return false;
    }

    plaseazaTurnuriRecursiv(0);

    const tablaSah = document.getElementById('tabla-sah');

    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            const celula = document.createElement('div');
            celula.className = 'celula';
            if (tabla[i][j] === 1) {
                celula.classList.add('turn');
            }
            tablaSah.appendChild(celula);
        }
    }
}

plaseazaTurnuri();
