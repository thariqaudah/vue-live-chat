export default {
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    loadingStatus(status) {
      this.isLoading = status;
    },
  },
};
