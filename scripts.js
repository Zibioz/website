
    const worksData = {
    architect: [
        { src: "images/project1.png", alt: "Architect Work 1" },
        { src: "images/project1-1.png", alt: "Architect Work 1" },
        { src: "images/project1-2.png", alt: "Architect Work 1" },
        { src: "images/project1-4.png", alt: "Architect Work 1" },
        { src: "images/project2.png", alt: "Architect Work 2" },
        { src: "images/project3.png", alt: "Architect Work 2" },
        { src: "images/project4.png", alt: "Architect Work 2" },
        { src: "images/project4-1.png", alt: "Architect Work 2" },
        { src: "images/project5.png", alt: "Architect Work 3" }
    ],
    project: [
        { src: "images/act01.JPG", alt: "Project Work 1" },
        { src: "images/act02.JPG", alt: "Project Work 1" }
    ],
    installation: [
        { src: "images/installation01.jpg", alt: "Installation Work 1" },
        { src: "images/installation02.png", alt: "Installation Work 2" }
    ],
    lego: [
        { src: "images/lego01.JPG", alt: "Lego Work 1" },
        { src: "images/lego02.JPG", alt: "Lego Work 2" },
        { src: "images/lego03.JPG", alt: "Lego Work 3" },
        { src: "images/lego04.png", alt: "Lego Work 4" },
        { src: "images/lego05.png", alt: "Lego Work 5" },
        { src: "images/lego06.png", alt: "Lego Work 6" }
    ]
};

document.querySelectorAll(".sidebar a").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const category = link.dataset.category;
        const mainContent = document.getElementById("main-content");

        if (worksData[category]) {
            mainContent.innerHTML = worksData[category].map((work, index) => {
                const randomTop = Math.floor(Math.random() * 60) + 5; // 随机top位置 (10% ~ 70%)
                const randomLeft = Math.floor(Math.random() * 60) + 5; // 随机left位置 (10% ~ 70%)
                return `
                        <img 
                            src="${work.src}" 
                            alt="${work.alt}" 
                            class="work-image" 
                            style="position: absolute; top: ${randomTop}%; left: ${randomLeft}%; transform: translate(-5%, -5%);"
                        >
                    `;
                }).join("\n");
            } else {
                mainContent.innerHTML = "<p>No works available for this category.</p>";
            }
        });
    });

    // 添加点击放大图片的功能
    document.body.addEventListener("click", (event) => {
        if (event.target.tagName === "IMG" && event.target.classList.contains("work-image")) {
            const src = event.target.src;

            // 创建遮罩层
            const overlay = document.createElement("div");
            overlay.style.position = "fixed";
            overlay.style.top = "0";
            overlay.style.left = "0";
            overlay.style.width = "100vw";
            overlay.style.height = "100vh";
            overlay.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
            overlay.style.display = "flex";
            overlay.style.justifyContent = "center";
            overlay.style.alignItems = "center";
            overlay.style.zIndex = "1000";

            // 创建放大的图片
            const enlargedImg = document.createElement("img");
            enlargedImg.src = src;
            enlargedImg.style.maxWidth = "90%";
            enlargedImg.style.maxHeight = "90%";
            enlargedImg.style.cursor = "pointer";

            // 点击图片或遮罩层关闭放大
            overlay.addEventListener("click", () => overlay.remove());

            overlay.appendChild(enlargedImg);
            document.body.appendChild(overlay);
        }
    });



    document.addEventListener("DOMContentLoaded", () => {
        const images = document.querySelectorAll(".slider-image");
        const prevButton = document.querySelector(".prev");
        const nextButton = document.querySelector(".next");
    
        let currentIndex = 0; // 当前显示的图片索引
    
        function updateCarousel() {
            images.forEach((img, index) => {
                img.classList.remove("active"); // 移除所有图片的active状态
                if (index === currentIndex) {
                    img.classList.add("active"); // 只添加当前图片的active状态
                }
            });
        }
    
        // 上一张图片按钮
        prevButton.addEventListener("click", () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length; // 循环回到最后一张
            updateCarousel();
        });
    
        // 下一张图片按钮
        nextButton.addEventListener("click", () => {
            currentIndex = (currentIndex + 1) % images.length; // 循环到第一张
            updateCarousel();
        });
    
        // 初始化轮播
        updateCarousel();
    });
    