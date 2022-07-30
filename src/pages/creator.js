import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import ExploreCreators from "@/components/ProjectsArea/ExploreCreators";
import PageTitle from "@/components/Reuseable/PageTitle";
import React from "react";

const Creators = () => {
    return (
        <Layout>
            <Header />
            <PageTitle title="Creator" />
            <ExploreCreators />
        </Layout>
    );
};

export default Projects;
