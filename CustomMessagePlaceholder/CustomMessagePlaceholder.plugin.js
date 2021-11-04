/**
 * @name CustomMessagePlaceholder
 * @version 0.0.1
 * @author Radu
 * @description Changes the placeholder in the message bar
 * @updateUrl https://raw.githubusercontent.com/coderadu/better-discord-plugins/main/CustomMessagePlaceholder/CustomMessagePlaceholder.plugin.js
 **/

module.exports = class CustomMessagePlaceholder {
  config = {
    info: {
      name: "CustomMessagePlaceholder",
      version: "0.0.1",
      description: "Changes the placeholder in the message bar",
      authors: [
        {
          name: "Radu",
          discord_id: "504699652466016267",
          github_username: "coderadu",
        },
      ],
    },
  };
  load() {
    console.log("[CustomMessagePlaceholder] has loaded");
  }
  start() {
    console.log("[CustomMessagePlaceholder] has started");
    this.interval = setInterval(() => {
      const placeholder = document.querySelector(".placeholder-37qJjk");
      if (placeholder) {
        placeholder.innerHTML = BdApi.loadData(
          this.config.info.name,
          "placeholder"
        );
      }
    }, 1000);
  }
  stop() {
    console.log("[CustomMessagePlaceholder] has stopped");
    clearInterval(this.interval);
  }
  getSettingsPanel() {
    setTimeout(() => {
      const input = document.getElementById("cmp-placeholder");
      input.addEventListener("change", (e) => {
        BdApi.setData(this.config.info.name, "placeholder", input.value);
      });
      input.value = BdApi.loadData(this.config.info.name, "placeholder");
    }, 200);
    return this.getSettingsPanelHtml();
  }
  getSettingsPanelHtml() {
    return `
      <font color="white">
        <input type="text" id="cmp-placeholder" style="width: 100%" placeholder="Enter placeholder here" class="inputDefault-_djjkz input-cIJ7To"></input>
      </font>
    `;
  }
};
