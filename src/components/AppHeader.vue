<template>
  <header>
    <div class="logo">
      <img alt="Vue logo" src="../../src/assets/logo.svg" height="40" />
    </div>
    <div class="links">
      <ul>
        <li>HOME</li>
        <li>EXPLORE</li>
        <li>ABOUT</li>
        <li>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clip-rule="evenodd"
              />
            </svg>

            <svg
              class="user"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
</script>

<style scoped>
header {
  display: grid;
  grid-template-columns: auto auto;
  border-bottom: 1px solid #e3ebe7;
  align-items: center;
  font-size: 0.8rem;
  font-weight: 500;
}
.logo {
  margin-left: 50px;
  align-items: center;

}
.links{
    margin-right: 50px;
}
ul {
  display: flex;
  list-style-type: none;
  gap: 13px;
  float: right;
  margin-right: 20px;
  align-items: center;
}
button {
  border-radius: 37px;
  border: 1px solid #e3ebe7;
  background-color: white;
}
svg {
  color: rgb(93, 89, 89);
  width: 24px;
  height: 24px;
  margin-left: 3px;
  margin-right: 3px;
}
</style>