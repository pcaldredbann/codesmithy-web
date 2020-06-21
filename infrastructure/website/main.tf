resource "aws_s3_bucket" "www" {
  count = "${length(var.www_domain_urls)}"

  bucket = "${element(var.www_domain_urls, count.index)}"
  acl    = "public-read"

  policy = <<POLICY
{
  "Statement": [
    {
      "Action": ["s3:GetObject"],
      "Effect": "Allow",
      "Principal": "*",
      "Resource": [
        "arn:aws:s3:::${element(var.www_domain_urls, count.index)}/*"
      ]
    }
  ],
  "Version": "2012-10-17"
}
POLICY

  website {
    index_document = "index.html"
    error_document = "error.html"
  }
}

resource "aws_s3_bucket" "base" {
  count = "${length(var.domain_urls)}"

  bucket = "${element(var.domain_urls, count.index)}"
  acl    = "public-read"

  policy = <<POLICY
{
  "Statement": [
    {
      "Action": ["s3:GetObject"],
      "Effect": "Allow",
      "Principal": "*",
      "Resource": [
        "arn:aws:s3:::${element(var.domain_urls, count.index)}/*"
      ]
    }
  ],
  "Version": "2012-10-17"
}
POLICY

  website {
    redirect_all_requests_to = "www.${element(var.domain_urls, count.index)}"
  }
}
