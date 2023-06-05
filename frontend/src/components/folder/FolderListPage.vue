<template>
  <div>
    <FolderNavigation :folders="folderData" />
  </div>
</template>

<script>
import FolderNavigation from "@/components/folder/FolderNavigation";

export default {
  components: {
    FolderNavigation
  },
  created() {
    this.id = this.$route.query.id;
  },
  data() {
    return {
      id: null,
      folderData: [
        {
          title: "Folder",
          icon: "folder-fill",
          variant: "secondary",
          route: "/my"
        },
        {
          title: "Shared",
          icon: "folder-symlink-fill",
          variant: "primary",
          route: "/shared"
        },
        {
          title: "Trash",
          icon: "trash-fill",
          variant: "danger",
          route: "/trash"
        }
      ]
    };
  }
};
</script>
