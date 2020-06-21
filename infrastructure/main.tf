module "vpc" {
  source = "./vpc"

  cidr_block                = "10.0.0.0/16"
  public_subnet_cidr_blocks = ["10.0.1.0/24", "10.0.2.0/24", "10.0.3.0/24"]
  client_name               = "codesmithy"
}

module "website" {
  source = "./website"

  domain_urls     = ["thecodesmithy.com", "thecodesmithy.co.uk"]
  www_domain_urls = ["www.thecodesmithy.com", "www.thecodesmithy.co.uk"]
  client_name     = "codesmithy"

  mx_records = [
    "1 aspmx.l.google.com",
    "5 alt1.aspmx.l.google.com",
    "5 alt2.aspmx.l.google.com",
    "10 alt3.aspmx.l.google.com",
    "10 alt4.aspmx.l.google.com",
  ]

  txt_records = [
    "google-site-verification=Al2AdKVi9MT3EAh36sf7Ve8F2oE4wKjPgP3dc-Oi394",
  ]
}
