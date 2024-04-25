export default function () {
    const userStore = useUserStore();
    const router = useRouter();

    setTimeout(() => {
        if (!userStore.getToken && router.currentRoute.value.path !== '/auth') {
            return navigateTo('/auth');
        }
    });
}
