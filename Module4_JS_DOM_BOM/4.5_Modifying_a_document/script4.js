    let data = {
        "Fish": {
            "trout": {},
            "salmon": {}
        },
        "Trees": {
            "Giant": {
                "sequoia": {},
                "oak": {}
            },
            "Flowering": {
                "apple tree": {},
                "magnolia": {}
            }
        }
    };

    function createTree(container, data) {
        let ul = document.createElement('ul');

        for (let key in data) {
            let li = document.createElement('li');
            li.textContent = key;

            if (Object.keys(data[key]).length > 0) {
                let subUl = createTree(document.createElement('div'), data[key]);
                li.appendChild(subUl);
            }

            ul.appendChild(li);
        }

        if (ul.children.length > 0) {
            container.appendChild(ul);
        }
        return ul;
    }

    let container = document.getElementById('container');
    createTree(container, data); 