import Link from 'next/link';
import Layout from '../../components/layout';
import Head from "next/head";
export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First post</title>
            </Head>
            <h1>First Post</h1>
            <h2>
                <Link href="/public">Back to home</Link>
            </h2>
        </Layout>
    );
}