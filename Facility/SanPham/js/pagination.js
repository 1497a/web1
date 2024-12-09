function paginate(filteredItem, perPage, renderFunc, options) {
    const totalPages = Math.ceil(filteredItem.length / perPage);
    const numberPage = document.getElementById(options.pagination);
    const prevBtn = document.querySelector('.' + options.prevBtn);
    const nextBtn = document.querySelector('.' + options.nextBtn);
    let currentPage = 1;

    const maxVisiblePages = 5;

    function renderPage(page) {
        const start = (page - 1) * perPage;
        const end = page * perPage;
        const paginatedOrders = filteredItem.slice(start, end);

        renderFunc(paginatedOrders);
        updatePaginationUI(page, totalPages);
    }

    function updatePaginationUI(page, totalPages) {
        let html = '';
        const halfVisible = Math.floor(maxVisiblePages / 2);
        let startPage = Math.max(1, page - halfVisible);
        let endPage = Math.min(totalPages, page + halfVisible);

        if (startPage > 1) {
            html += `<li><a class="page-link">1</a></li>`;
            if (startPage > 2) {
                html += `<li class="disabled"><a class="page-link">...</a></li>`;
            }
        }

        for (let i = startPage; i <= endPage; i++) {
            html += `<li class="${i === page ? "active" : ""}"><a class="page-link">${i}</a></li>`;
        }

        if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
                html += `<li class="disabled"><a class="page-link">...</a></li>`;
            }
            html += `<li><a class="page-link">${totalPages}</a></li>`;
        }

        numberPage.innerHTML = html;

        prevBtn.classList.toggle('disabled', page === 1);
        nextBtn.classList.toggle('disabled', page === totalPages);
    }

    numberPage.addEventListener('click', (e) => {
        const clickedPage = parseInt(e.target.textContent);
        if (clickedPage) {
            currentPage = clickedPage;
            renderPage(currentPage);
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            renderPage(currentPage);
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            renderPage(currentPage);
        }
    });

    renderPage(currentPage);
}
