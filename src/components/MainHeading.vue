<script>
</script>

<template>
  <section>
    <div>
      <h4>Looking for somethings?</h4>
      <p>
        Using the search below, you can find any item that you are looking for.
      </p>
      <div class="search">
        <input type="text" placeholder="Iphone 13 Pro Max, Samsung Galaxy S22 . . " />
        <div class="search-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  display: grid;
  text-align: center;
}
h4 {
  font-weight: 800;
  font-size: 2rem;
  margin-bottom: 0px !important;
}
p {
  font-size: 0.9rem;
  color: gray;
  word-spacing: -1px;
  font-weight: 500;
}
input {
  padding: 10px;
  border-radius: 15px;
  border: 1px solid #e3ebe7;
  background-color: white;
  width: 25%;
}
svg {
  margin: 0px;
  width: 20px;
  height: 20px;
}
input {
  text-align: center;
  background-color: whitesmoke;
}
.search-icon {
  color: gray;
  position: absolute;
  width: 30%;
  text-align: end;
  margin-top: -29px;
  margin-left: 135px;
}
</style>