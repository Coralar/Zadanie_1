'use strict';
/**
 * @property {HTMLElement} gameContainerEl Контейнер игры (DOM элемент).
 */
/*  const chess = {
    gameContainerEl: document.getElementById('game'),

    renderMap() {
        const rows = [0, 1, 2, 3, 4, 5, 6, 7, 8, 0];
        const cols = [0, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 0];

        for (let row; row < rows.length; row++) {
            const tr = document.createElement('tr');
            this.gameContainerEl.appendChild(tr);

            for (let col; col < cols.length; col++) {
                const td = document.createElement('td');
                tr.appendChild(td);

                if (rows[row] === 0 && cols[col] !== 0) {
                    td.innerHTML = cols[col];
                } else if (cols[col] === 0 && rows[row] !== 0) {
                    td.innerHTML = rows[row].toString();
                }
                if (this.isCellIsBlack(row, col)) {
                    td.style.backgroundColor = 'grey';
                }
            }
        }
    },

    isCellIsBlack(rowNum, colNum) {
        if (rowNum === 0 || colNum === 0 || rowNum === 9 || colNum === 9) {
          return false;
        }
        return (rowNum % 2 === 1 && colNum % 2 === 0) || (rowNum % 2 === 0 && colNum % 2 === 1);
    },
};
chess.renderMap();
 */
"use strict";

const chess = {
  gameContainerEl: document.getElementById('game'),

  renderMap() {
    const rows = [0, 1, 2, 3, 4, 5, 6, 7, 8, 0];
    const cols = [0, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 0];

    for (let row; row < rows.length; row++) {
      const tr = document.createElement('tr');
      this.gameContainerEl.appendChild(tr);

      for (let col; col < cols.length; col++) {
        const td = document.createElement('td');
        tr.appendChild(td);

        if (rows[row] === 0 && cols[col] !== 0) {
          td.innerHTML = cols[col];

        } else if (cols[col] === 0 && rows[row] !== 0) {
          td.innerHTML = rows[row].toString();
        }
        if (this.isCellIsBlack(row, col)) {
          td.style.backgroundColor = 'grey';
        }
      }
    }
  },
  isCellIsBlack(rowNum, colNum) {
    if (rowNum === 0 || colNum === 0 || rowNum === 9 || colNum === 9) {
      return false;
    }
    return (rowNum % 2 === 1 && colNum % 2 === 0) || (rowNum % 2 === 0 && colNum % 2 === 1);
  },
};

chess.renderMap();