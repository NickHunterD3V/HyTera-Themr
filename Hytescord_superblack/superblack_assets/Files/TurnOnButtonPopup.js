let button = document.querySelector("#button-discord")

button.addEventListener("click", async () => {

  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true })

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: executionCode,
  });
});

function executionCode() {

  let head = document.querySelector("head")

  let style = document.createElement('style')

  style.innerHTML = `
  .chatContent-3KubbW, .container-2o3qEW, .members-3WRCEx, .membersWrap-3NUR2t, .wrapper-3HVHpV, .wrapper-15CKyy, .contentRegionScroller-2_GT_N, .item-2idW98, .tabBody-2dgbAs, .scroller-hE2gWq, .emptyCard-KDifrB, .container-1Lk8p7, .container-x8Y1ix, .header-1zd7se, .footer-3ie9JP, .footer-31IekZ, .scroller-3j5xK2, .scroller-RfJjkV, .scroller-29cQFV, .scroller-oTbAWP, .submitContainer-1DHMA0 {
    background-color: black !important;
  }

  .scroller-1ox3I2, .container-1-ERn5, .panels-3wFtMD, .title-31SJ6t, .sidebarRegionScroller-FXiQOh, .scroller-WSmht3, .searchBar-3TnChZ, .container-ZMc96U, .inputDefault-3FGxgL, .sidebar-1tnWFu {
    background-color: #18191c !important;
  }

  .children-3xh0VB::after, .form-3gdLxP::before {
    display: none !important;
  }

  .scrollableContainer-15eg7h {
    background-color: #292b2f !important;
  }

  .member-2gU6Ar, .membersGroup-2eiWxl, .content-2a4AW9 {
    background-color: transparent !important;
  }

  .channelTextArea-1VQBuV, .scrollableContainer-15eg7h {
    border-radius: 20px !important;
  }

  .grid-1aWVsE, .container-3i3IzO {
    background-color: #18191c;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  .title-1_TkpU, .colorStandard-21JIj7, .footerTitle-3Bslxi, .title-2Giw-4M, .contents-3ca1mk, .title-OdeD-o, .title-2Giw-4, .inputDefault-3FGxgL {
    color: white;
  }
  `

  head.appendChild(style)
}