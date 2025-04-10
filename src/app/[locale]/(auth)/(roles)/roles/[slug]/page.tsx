import PermissionAddedToRoles from "@/src/components/pages/auth/roles/PermissionAddedToRoles";
import UsersInRoles from "@/src/components/pages/auth/roles/user-in-roles/UsersInRoles";
import EditHeaderSinglePage from "@/src/components/shared/edit-header-single-details-pages/EditHeaderSinglePage";

export default function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {

  //   const [service, setService] = useState(null);
  //   const [loading, setLoading] = useState<boolean>(false);

  //   const fetchService = useCallback(() => {
  //     setLoading(true);
  //     getRequest(`/tazamun-freight-forwarder/api/v1/Services/${slug}`)
  //       .then((res) => {
  //         setService(res?.data);
  //         setLoading(false);
  //       })
  //       .catch(() => {
  //         setLoading(false);
  //         message.error("An error occurred while fetching the service.");
  //       });
  //   }, [slug]);

  //   useEffect(() => {
  //     fetchService();
  //   }, [fetchService]);

  //   if (loading)
  //     return (
  //       <div className="container py-10 flex justify-center items-center h-screen">
  //         <Spin size="large" />
  //       </div>
  //     );

  return (
    <div className="container py-10 ">
      <EditHeaderSinglePage title="View Role" url={`/edit-role/${slug}`} />
      <h5 className="text-base font-[400] text-[#191919]">[Role name] Role</h5>
      <div className="flex flex-col gap-5 mt-4">
        <PermissionAddedToRoles />
        <UsersInRoles />
      </div>
    </div>
  );
}
