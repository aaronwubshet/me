<svelte:head>
	<title>Art™</title>
</svelte:head>

<script>
    let currentImageIndex = 0;
    let isModalOpen = false;

	const images = [
        "../images/art/photography/t1.jpeg",
		"../images/art/photography/t2.jpeg",
		"../images/art/photography/t3.jpeg",
		"../images/art/photography/t4.jpg",
		"../images/art/photography/t5.jpeg",
		"../images/art/photography/t6.jpg",
		"../images/art/photography/t7.jpg",
		"../images/art/photography/t8.jpg",
		"../images/art/photography/t9.jpg",
		"../images/art/photography/t10.jpg",
		"../images/art/photography/t11.jpg",
		"../images/art/photography/t12.jpg",
		"../images/art/photography/t13.jpg",
		"../images/art/photography/t14.jpg",
    ];

    function openModal(index) {
        currentImageIndex = index;
        isModalOpen = true;
    }

    function closeModal() {
        isModalOpen = false;
    }

    function nextImage(event) {
        event.stopPropagation();
        currentImageIndex = (currentImageIndex + 1) % images.length;
    }

    function prevImage(event) {
        event.stopPropagation();
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    }
</script>

<div class="gallery">
    {#each images as image, index}
        <div class="gallery-item" on:click={() => openModal(index)}>
            <img src={image} alt={`Photo ${index + 1}`} />
        </div>
    {/each}
</div>

{#if isModalOpen}
    <div class="modal" on:click={closeModal}>
        <span class="close" on:click={closeModal}>&times;</span>
        <img class="modal-content" src={images[currentImageIndex]} alt={`Photo ${currentImageIndex + 1}`} />
        <a class="prev" on:click={prevImage}>&#10094;</a>
        <a class="next" on:click={nextImage}>&#10095;</a>
    </div>
{/if}

<style>
    .gallery {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 50px;
        padding: 10px;
    }

    .gallery-item {
        overflow: hidden;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        cursor: pointer;
		position: relative;
    }

    .gallery-item img {
        width: 100%;
        height: 100%;
		object-fit: cover;
        display: block;
        transition: transform 0.2s;
    }

    .gallery-item img:hover {
        transform: scale(1.05);
    }

    .modal {
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgba(0, 0, 0, 0.9);
    }

    .modal-content {
        max-width: 90%;
        max-height: 90%;
    }

    .close {
        position: absolute;
        top: 20px;
        right: 35px;
        color: #fff;
        font-size: 40px;
        font-weight: bold;
        transition: 0.3s;
        cursor: pointer;
    }

    .close:hover,
    .close:focus {
        color: #bbb;
        text-decoration: none;
        cursor: pointer;
    }

    .prev,
    .next {
        cursor: pointer;
        position: absolute;
        top: 50%;
        width: auto;
        padding: 16px;
        margin-top: -22px;
        color: #fff;
        font-weight: bold;
        font-size: 40px;
        transition: 0.3s;
        user-select: none;
    }

    .prev {
        left: 0;
    }

    .next {
        right: 0;
    }

    .prev:hover,
    .next:hover {
        color: #bbb;
    }
</style>