
`
                          This Script Work on Facebook
                 Maked For: Extract Group Members Profile Link's
                --------------------------------------------------
                Author   : Md Sifat Islam
                Github   : cyber-programer

`

const bad_id_list = []; // all bad_links
const id_list = [];

// Function to scroll and collect links
async function scrollAndCollectLinks() {
    // Scroll down the page in increments
    for (let i = 0; i < 100; i++) {
        window.scrollBy(0, window.innerHeight);
        await new Promise(resolve => setTimeout(resolve, 500)); // Wait for content to load
    }

    // Collect links
    const xpath = document.querySelectorAll("a[role='link'][tabindex='-1']");
    xpath.forEach(element => {
        bad_id_list.push(element.href);
    });

    // Process collected links
    bad_id_list.forEach(elm => {
        const user_id = elm.split('/')[6];
        const url = `https://www.facebook.com/profile.php?id=${user_id}`;
        id_list.push(url);
    });

    console.log(id_list.join(' \n'));
}

// Run the function
scrollAndCollectLinks();
