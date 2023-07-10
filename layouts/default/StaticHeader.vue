<template>
	<header>
		<div id="nav">
			<NuxtLink to="/">
				Home
			</NuxtLink>
			<NuxtLink to="/about">
				About
			</NuxtLink>
		</div>
	</header>
</template>

<style>
header {
  line-height: 1.5;
  max-height: 5rem;
}

a, a:visited, a:active {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

#nav {
  width: 100%;
  font-size: 20px;
  text-align: center;
  margin-top: 2rem;
  display: flex;
}

#nav a.router-link-exact-active {
  color: var(--color-text);
}

#nav a.router-link-exact-active:hover {
  background-color: transparent;
}

#nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

#nav a:first-of-type {
  border: 0;
}
</style>
