function activeSearchInput() {
  try {
    const classActive = document
      .getElementById("header-search")
      .classList.contains("header--search-overlay--container--deactive");

    if (classActive) {
      document
        .getElementById("header-search")
        .classList.remove("header--search-overlay--container--deactive");
      document
        .getElementById("header-search")
        .classList.add("header--search-overlay--container--active");
    } else {
      document
        .getElementById("header-search")
        .classList.remove("header--search-overlay--container--active");
      document
        .getElementById("header-search")
        .classList.add("header--search-overlay--container--deactive");
    }
  } catch (err) {
    console.log(err);
  }
}

const activeLinkListData = (key) => {
  try {
    const classActive = document
      .getElementById(key)
      .classList.contains("mega-menu--links--group--deactive");

    //   const classActive1 = document.

    if (classActive) {
      removeDeactiveLink(key);
      document
        .getElementById(key)
        .classList.remove("mega-menu--links--group--deactive");
      document
        .getElementById(key)
        .classList.add("mega-menu--links--group--active");
    } else {
      removeDeactiveLink(key);
      document
        .getElementById(key)
        .classList.remove("mega-menu--links--group--active");
      document
        .getElementById(key)
        .classList.add("mega-menu--links--group--deactive");
    }
  } catch (err) {
    console.log(err);
  }
};

const removeDeactiveLink = (key) => {
  if (key === "key_5") {
    document
      .getElementById("key_6")
      .classList.add("mega-menu--links--group--deactive");
    document
      .getElementById("key_7")
      .classList.add("mega-menu--links--group--deactive");
    document
      .getElementById("key_8")
      .classList.add("mega-menu--links--group--deactive");
    document
      .getElementById("key_9")
      .classList.add("mega-menu--links--group--deactive");
    document
      .getElementById("key_10")
      .classList.add("mega-menu--links--group--deactive");
  } else if (key === "key_6") {
    document
      .getElementById("key_5")
      .classList.add("mega-menu--links--group--deactive");
    document
      .getElementById("key_7")
      .classList.add("mega-menu--links--group--deactive");
    document
      .getElementById("key_8")
      .classList.add("mega-menu--links--group--deactive");
    document
      .getElementById("key_9")
      .classList.add("mega-menu--links--group--deactive");
    document
      .getElementById("key_10")
      .classList.add("mega-menu--links--group--deactive");
  } else if (key === "key_7") {
    document
      .getElementById("key_5")
      .classList.add("mega-menu--links--group--deactive");
    document
      .getElementById("key_6")
      .classList.add("mega-menu--links--group--deactive");
    document
      .getElementById("key_8")
      .classList.add("mega-menu--links--group--deactive");
    document
      .getElementById("key_9")
      .classList.add("mega-menu--links--group--deactive");
    document
      .getElementById("key_10")
      .classList.add("mega-menu--links--group--deactive");
  } else if (key === "key_8") {
    document
      .getElementById("key_5")
      .classList.add("mega-menu--links--group--deactive");
    document
      .getElementById("key_7")
      .classList.add("mega-menu--links--group--deactive");
    document
      .getElementById("key_6")
      .classList.add("mega-menu--links--group--deactive");
    document
      .getElementById("key_9")
      .classList.add("mega-menu--links--group--deactive");
    document
      .getElementById("key_10")
      .classList.add("mega-menu--links--group--deactive");
  } else if (key === "key_9") {
    document
      .getElementById("key_5")
      .classList.add("mega-menu--links--group--deactive");
    document
      .getElementById("key_6")
      .classList.add("mega-menu--links--group--deactive");
    document
      .getElementById("key_8")
      .classList.add("mega-menu--links--group--deactive");
    document
      .getElementById("key_7")
      .classList.add("mega-menu--links--group--deactive");
    document
      .getElementById("key_10")
      .classList.add("mega-menu--links--group--deactive");
  } else if (key === "key_10") {
    document
      .getElementById("key_5")
      .classList.add("mega-menu--links--group--deactive");
    document
      .getElementById("key_6")
      .classList.add("mega-menu--links--group--deactive");
    document
      .getElementById("key_8")
      .classList.add("mega-menu--links--group--deactive");
    document
      .getElementById("key_7")
      .classList.add("mega-menu--links--group--deactive");
    document
      .getElementById("key_9")
      .classList.add("mega-menu--links--group--deactive");
  }
};
