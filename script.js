document.addEventListener("DOMContentLoaded", function() {
    const bookshelf = document.getElementById('bookshelf');

    const rows = 4;  // 本棚の段数
    const booksPerRow = 4;  // 各段に配置する本の数
    const bookWidth = 50;  // 本の幅
    const bookHeight = 150;  // 本の高さ
    const shelfHeight = 200;  // 各段の高さ
    const shelfPadding = 10;  // 本と本の間の余白

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < booksPerRow; col++) {
            const book = document.createElement('div');
            book.classList.add('book');
            book.style.top = `${row * shelfHeight + shelfPadding}px`;
            book.style.left = `${col * (bookWidth + shelfPadding)}px`;
            bookshelf.appendChild(book);
        }
    }
});
