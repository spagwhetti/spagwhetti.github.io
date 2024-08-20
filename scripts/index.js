let activeSection = null;

document.addEventListener('keydown', (e) => {
    const nav = document.querySelector('.nav');
    const navItems = Array.from(nav.children).filter(child => child.classList.contains('nav-item'));
    const styledList = document.querySelector('.styled-list');
    let listItems = [];
    if (styledList) {
        listItems = Array.from(styledList.children);
    }

    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        let selectedNav = 0;
        for (let i = 0; i < navItems.length; i++) {
            if (navItems[i].classList.contains('nav-selected')) {
                selectedNav = i;
                break;
            }
        }
        if (navItems[selectedNav]) {
            navItems[selectedNav].classList.remove('nav-selected');
        }

        if (e.key === 'ArrowRight') {
            selectedNav = (selectedNav + 1) % navItems.length;
        } else if (e.key === 'ArrowLeft') {
            selectedNav = (selectedNav - 1 + navItems.length) % navItems.length;
        }

        if (navItems[selectedNav]) {
            navItems[selectedNav].classList.add('nav-selected');
        }

        activeSection = 'nav';

    } else if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        let selectedListElement = 0;
        for (let i = 0; i < listItems.length; i++) {
            if (listItems[i].classList.contains('list-element-selected')) {
                selectedListElement = i;
                break;
            }
        }
        if (listItems[selectedListElement]) {
            listItems[selectedListElement].classList.remove('list-element-selected');
        }

        if (e.key === 'ArrowDown') {
            selectedListElement = (selectedListElement + 1) % listItems.length;
        } else if (e.key === 'ArrowUp') {
            selectedListElement = (selectedListElement - 1 + listItems.length) % listItems.length;
        }

        if (listItems[selectedListElement]) {
            listItems[selectedListElement].classList.add('list-element-selected');
        }

        activeSection = 'styledList';
    } else if (e.key === 'Enter') {
        if (activeSection === 'nav') {
            const selectedNav = Array.from(nav.children).filter(child => child.tagName.toLowerCase() === 'a').find(child => child.classList.contains('nav-selected'));
            if (selectedNav) {
                window.location.href = selectedNav.href;
            }
        } else if (activeSection === 'styledList') {
            const selectedListElement = Array.from(styledList.children).find(child => child.classList.contains('list-element-selected'));
            if (selectedListElement) {
                if (selectedListElement.querySelector('a')) {
                    selectedListElement.querySelector('a').click();
                }
            }
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a.copy-text').forEach(anchor => {
        anchor.addEventListener('click', function(event) {
            event.preventDefault();

            const href = this.getAttribute('href');

            navigator.clipboard.writeText(href).then(() => {
                console.log('meowed to clipboard:', href);
            }).catch(err => {
                console.error('failed to meow: ', err);
            });
        });
    });
});
