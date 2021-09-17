<template>
  <div id="post">
    <div class="card">
      <div class="card-header d-flex justify-content-between">
        <div class="profile-container d-flex">
          <div class="img-container">
            <img :src="post.profile_picture" alt="profile_picture" />
          </div>
          <span class="align-self-center ms-3">{{ post.profile_name }}</span>
        </div>
        <span class="align-self-center"
          ><svg
            aria-label="Altre opzioni"
            class="_8-yf5"
            fill="#262626"
            height="16"
            role="img"
            viewBox="0 0 48 48"
            width="16"
          >
            <circle
              clip-rule="evenodd"
              cx="8"
              cy="24"
              fill-rule="evenodd"
              r="4.5"
            ></circle>
            <circle
              clip-rule="evenodd"
              cx="24"
              cy="24"
              fill-rule="evenodd"
              r="4.5"
            ></circle>
            <circle
              clip-rule="evenodd"
              cx="40"
              cy="24"
              fill-rule="evenodd"
              r="4.5"
            ></circle></svg
        ></span>
      </div>
      <img :src="post.post_image" class="" alt="post-image" />
      <div class="card-body">
        <!-- icone -->
        <div class="icon-container d-flex justify-content-between mb-2">
          <div class="icon-container-left">
            <svg
              aria-label="Mi piace"
              class="_8-yf5"
              fill="#262626"
              height="24"
              role="img"
              viewBox="0 0 48 48"
              width="24"
            >
              <path
                d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"
              ></path>
            </svg>
            <svg
              aria-label="Commenta"
              class="_8-yf5"
              fill="#262626"
              height="24"
              role="img"
              viewBox="0 0 48 48"
              width="24"
            >
              <path
                clip-rule="evenodd"
                d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
                fill-rule="evenodd"
              ></path>
            </svg>
            <svg
              aria-label="Condividi il post"
              class="_8-yf5"
              fill="#262626"
              height="24"
              role="img"
              viewBox="0 0 48 48"
              width="24"
            >
              <path
                d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"
              ></path>
            </svg>
          </div>
          <div class="icon-container-right">
            <svg
              aria-label="Salva"
              class="_8-yf5"
              fill="#262626"
              height="24"
              role="img"
              viewBox="0 0 48 48"
              width="24"
            >
              <path
                d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"
              ></path>
            </svg>
          </div>
        </div>
        <!-- likes -->
        <div class="likes-container d-flex align-items-center mb-1">
          <img
            :src="post.likes[0].profile_picture"
            class="rounded-circle"
            alt="profile-image"
          />
          <span> Piace a </span>
          <span class="my-text-bold my-text-underline-hover">{{
            post.likes[0].username
          }}</span>
          <span> e </span>
          <span class="my-text-bold">altri {{ post.likes.length - 1 }}</span>
        </div>
        <!-- commento proprietario del post -->
        <div class="profile-comment-container">
          <span class="my-text-bold my-text-underline-hover">{{
            post.profile_name
          }}</span>
          <span> {{ post.post_text }}</span>
        </div>
        <!-- commenti -->
        <div class="all-comment" @click="(showLess = false), (isHidden = true)">
          <span v-if="!isHidden && post.comments.length >= 3"
            >Mostra tutti e i {{ post.comments.length }} commenti</span
          >
        </div>
        <div v-if="showLess">
          <div
            v-for="(comment, index) in post.comments.slice(0, 2)"
            :key="index"
          >
            <span class="my-text-bold my-text-underline-hover">{{
              comment.username
            }}</span>
            <span> {{ comment.text }}</span>
          </div>
        </div>
        <div v-else>
          <div v-for="(comment, index) in post.comments" :key="index">
            <span class="my-text-bold my-text-underline-hover">{{
              comment.username
            }}</span>
            <span> {{ comment.text }}</span>
          </div>
        </div>
        <div class="date-container">
          {{ post.date.date }}
        </div>
      </div>
      <!-- input messaggi -->
      <div class="comment-input-container card-footer input-group">
        <span class="input-group-text smile"
          ><svg
            aria-label="Emoji"
            class="_8-yf5"
            color="#262626"
            fill="#262626"
            height="24"
            role="img"
            viewBox="0 0 48 48"
            width="24"
          >
            <path
              d="M24 48C10.8 48 0 37.2 0 24S10.8 0 24 0s24 10.8 24 24-10.8 24-24 24zm0-45C12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21S35.6 3 24 3z"
            ></path>
            <path
              d="M34.9 24c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5zm-21.8 0c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5zM24 37.3c-5.2 0-8-3.5-8.2-3.7-.5-.6-.4-1.6.2-2.1.6-.5 1.6-.4 2.1.2.1.1 2.1 2.5 5.8 2.5 3.7 0 5.8-2.5 5.8-2.5.5-.6 1.5-.7 2.1-.2.6.5.7 1.5.2 2.1 0 .2-2.8 3.7-8 3.7z"
            ></path></svg
        ></span>
        <textarea
          class="form-control"
          placeholder="Aggiungi un commento..."
          aria-label="Aggiungi un commento..."
        ></textarea>
        <span class="input-group-text publish">Pubblica</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: ["post"],
  data() {
    return {
      showLess: true,
      isHidden: false,
      //postDate: this.post.date.date,
    };
  },
  created() {
    //console.log(this.postDate);
  },
  computed: {
    /*     getTimePost: function () {
      let postDate = this.post.date.date;
      console.log(postDate.getTime());
      let nowDate = Date.now();
      console.log(nowDate);

      let diff = Math.abs(nowDate - postDate) / 3600000;
      console.log(diff);
      return diff;
    },
 */
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#post {
  font-size: 14px;
  .card {
    margin-bottom: 24px;
    border-radius: 3px;
    .card-header {
      background-color: #fff;
      border-radius: 3px 3px 0 0;
      .img-container {
        border-radius: 50%;
        padding: 2px;
        position: relative;
        background: linear-gradient(
          45deg,
          #f09433 0%,
          #e6683c 25%,
          #dc2743 50%,
          #cc2366 75%,
          #bc1888 100%
        );
        img {
          background: #fff;
          padding: 2px;
          border-radius: 50%;
          width: 38px;
          height: 38px;
          cursor: pointer;
        }
      }
      svg {
        cursor: pointer;
      }

      span {
        cursor: pointer;
        font-weight: 600;
        &:hover {
          text-decoration: underline;
        }
      }
    }
    .card-body {
      .icon-container {
        .icon-container-left {
          svg {
            margin-right: 16px;
            cursor: pointer;
          }
        }
        .icon-container-right {
          svg {
            cursor: pointer;
            transition: 0.1s;
            &:hover {
              opacity: 0.5;
            }
          }
        }
      }
      .likes-container {
        img {
          width: 20px;
          height: 20px;
        }
        & > span {
          margin-left: 5px;
        }
      }
      .all-comment {
        cursor: pointer;
        color: #8e8e8e;
      }
    }
    .comment-input-container.card-footer.input-group {
      background-color: #fff;
      .input-group-text {
        background-color: #fff;
        border: 0;
        padding: 0;
        &.smile {
          padding-right: 5px;
          cursor: pointer;
        }
        &.publish {
          color: #0095f6;
          opacity: 0.3;
          font-size: 14px;
          font-weight: 500;
        }
      }
      textarea {
        height: 18px;
        border: 0;
        resize: none;
        &::placeholder {
          font-size: 14px;
          color: #8e8e8e;
        }
        &:focus {
          box-shadow: none;
        }
      }
    }
  }
}
</style>
