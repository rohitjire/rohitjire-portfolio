import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Skill, Social, Technology } from "../../typings";

const query = groq`*[_type == 'project']{
    ...,
    technologies[]->
  }`;

type Data = {
  technologies: Technology[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const technologies: Technology[] = await sanityClient.fetch(query);
  res.status(200).json({ technologies });
}
