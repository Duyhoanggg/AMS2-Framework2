import { useGetProductsQuery, useRemoveProductMutation } from "../../api/Product";
import { Button, Popconfirm, Skeleton, Table, message } from "antd";
import { Link } from "react-router-dom";
type Props = {};

const Home = (props: Props) => {
    const { data, error, isLoading: isProductLoading } = useGetProductsQuery();
    const [removeProduct] = useRemoveProductMutation();
    const [messageApi, contextHolder] = message.useMessage();

    const dataSource = data?.map((item: any) => ({
        key: item.id,
        name: item.name,
        price: item.price,
    }));

    const columns = [
        {
            title: "Tên sản phẩm",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Giá sản phẩm",
            dataIndex: "price",
            key: "price",
        },
        {
            render: ({ key: id }: { key: number | string }) => (
                <div>
                    <Popconfirm
                        title="Xóa sản phẩm"
                        description="Bạn có chắc chắn muốn xóa sản phẩm không"
                        onConfirm={() => {
                            removeProduct(id)
                                .unwrap()
                                .then(() => {
                                    messageApi.open({
                                        type: "success",
                                        content: "Xóa sản phẩm thành công",
                                    });
                                });
                        }}
                        okText="Có"
                        cancelText="Không"
                    >
                        <Button className="hover:bg-black hover:text-" >Xóa</Button>
                    </Popconfirm>


                    
                    
                    <Button className="px-5 text-white bg-blue-600">
                        <Link to={`/admin/product/${id}/edit`}>Sửa</Link>
                    </Button>
                </div>
            ),
        },
    ];
  return (
    <div>
            <header className="flex items-center justify-between mb-4">
                <h2 className="font-bold text-2xl">Quản lý sản phẩm</h2>
                <Button className="bg-black text-white">
                    <Link to="/admin/product/add">Thêm sản phẩm</Link>
                </Button>
            </header>
            {contextHolder}
            {isProductLoading ? <Skeleton /> : <Table dataSource={dataSource} columns={columns} />}
        </div>
  )
}

export default Home