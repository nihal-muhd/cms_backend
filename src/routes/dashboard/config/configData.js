import Section from "../../../models/section.js";

export const getConfig = async (module) => {
    const sectionsData = await Section.find({ module });
    console.log(sectionsData);
    let result = {
        sectionConfig: getSections(sectionsData)
    }
    return result
}

const getSections = (sectionsData) => {
    return sectionsData.map(section => ({
        name: section.sectionName,
        displayName: getDisplayNameForSection(section.sectionName),
        components: getComponentsForSection(section.sectionName, sectionsData),
        buttons: getButtonsForSection(section.sectionName),
        data: getDataForSection(section.sectionName, sectionsData)
    }));
}

const getDisplayNameForSection = (sectionName) => {
    const displayNames = {
        heroSection: 'Hero Section',
        pageContent: 'Page Content'
    };
    return displayNames[sectionName] || sectionName;
};
const getComponentsForSection = (sectionName) => {
    const componentConfigs = {
        heroSection: [
            { name: 'title', displayName: 'Title' },
            { name: 'image', displayName: 'Image' }
        ],
        pageContent: [
            { name: 'text1', displayName: 'Main heading' },
            { name: 'text2', displayName: 'Sub heading' },
            { name: 'btnText', displayName: 'Button' }
        ]
    };

    return componentConfigs[sectionName] || [];
};
const getButtonsForSection = (sectionName) => {
    const buttonConfigs = {
        heroSection: [
            { name: 'add', displayName: 'Add' },
            { name: 'edit', displayName: 'Edit' },
            { name: 'delete', displayName: 'Delete' }
        ],
        pageContent: [
            { name: 'hide', displayName: 'Hide' },
            { name: 'edit', displayName: 'Edit' }
        ]
    };

    return buttonConfigs[sectionName] || [];
};

const getDataForSection = (sectionName, sectionsData) => {
    return sectionsData
        .filter(section => section.sectionName === sectionName)
        .map(section => section.data);
};
