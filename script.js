<script>
    document.addEventListener('DOMContentLoaded', function () {
        const professions = ["Frontend Developer", "YouTuber", "Blogger", "Traveller", "Chef"];
        const professionElement = document.getElementById('profession');
        let index = 0;
        function changeProfession() {
            professionElement.textContent = professions[index];
            index = (index + 1) % professions.length;
        }
        setInterval(changeProfession, 2000);
    });
</script>
