# `spotinst_ocean_aws`

Refer to the Terraform Registory for docs: [`spotinst_ocean_aws`](https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws).

# `oceanAws` Submodule <a name="`oceanAws` Submodule" id="@cdktf/provider-spotinst.oceanAws"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OceanAws <a name="OceanAws" id="@cdktf/provider-spotinst.oceanAws.OceanAws"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws spotinst_ocean_aws}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_aws

oceanAws.OceanAws(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  security_groups: typing.List[str],
  subnet_ids: typing.List[str],
  associate_ipv6_address: typing.Union[bool, IResolvable] = None,
  associate_public_ip_address: typing.Union[bool, IResolvable] = None,
  autoscaler: OceanAwsAutoscaler = None,
  blacklist: typing.List[str] = None,
  block_device_mappings: typing.Union[IResolvable, typing.List[OceanAwsBlockDeviceMappings]] = None,
  cluster_orientation: typing.Union[IResolvable, typing.List[OceanAwsClusterOrientation]] = None,
  controller_id: str = None,
  desired_capacity: typing.Union[int, float] = None,
  draining_timeout: typing.Union[int, float] = None,
  ebs_optimized: typing.Union[bool, IResolvable] = None,
  fallback_to_ondemand: typing.Union[bool, IResolvable] = None,
  filters: OceanAwsFilters = None,
  grace_period: typing.Union[int, float] = None,
  iam_instance_profile: str = None,
  id: str = None,
  image_id: str = None,
  instance_metadata_options: OceanAwsInstanceMetadataOptions = None,
  key_name: str = None,
  load_balancers: typing.Union[IResolvable, typing.List[OceanAwsLoadBalancers]] = None,
  logging: OceanAwsLogging = None,
  max_size: typing.Union[int, float] = None,
  min_size: typing.Union[int, float] = None,
  monitoring: typing.Union[bool, IResolvable] = None,
  name: str = None,
  region: str = None,
  root_volume_size: typing.Union[int, float] = None,
  scheduled_task: typing.Union[IResolvable, typing.List[OceanAwsScheduledTask]] = None,
  spot_percentage: typing.Union[int, float] = None,
  spread_nodes_by: str = None,
  tags: typing.Union[IResolvable, typing.List[OceanAwsTags]] = None,
  update_policy: OceanAwsUpdatePolicy = None,
  use_as_template_only: typing.Union[bool, IResolvable] = None,
  user_data: str = None,
  utilize_commitments: typing.Union[bool, IResolvable] = None,
  utilize_reserved_instances: typing.Union[bool, IResolvable] = None,
  whitelist: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#security_groups OceanAws#security_groups}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#subnet_ids OceanAws#subnet_ids}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.associateIpv6Address">associate_ipv6_address</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#associate_ipv6_address OceanAws#associate_ipv6_address}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.associatePublicIpAddress">associate_public_ip_address</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#associate_public_ip_address OceanAws#associate_public_ip_address}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.autoscaler">autoscaler</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler">OceanAwsAutoscaler</a></code> | autoscaler block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.blacklist">blacklist</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#blacklist OceanAws#blacklist}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.blockDeviceMappings">block_device_mappings</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappings">OceanAwsBlockDeviceMappings</a>]]</code> | block_device_mappings block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.clusterOrientation">cluster_orientation</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientation">OceanAwsClusterOrientation</a>]]</code> | cluster_orientation block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.controllerId">controller_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#controller_id OceanAws#controller_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.desiredCapacity">desired_capacity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#desired_capacity OceanAws#desired_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.drainingTimeout">draining_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#draining_timeout OceanAws#draining_timeout}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.ebsOptimized">ebs_optimized</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#ebs_optimized OceanAws#ebs_optimized}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.fallbackToOndemand">fallback_to_ondemand</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#fallback_to_ondemand OceanAws#fallback_to_ondemand}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.filters">filters</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters">OceanAwsFilters</a></code> | filters block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.gracePeriod">grace_period</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#grace_period OceanAws#grace_period}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.iamInstanceProfile">iam_instance_profile</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#iam_instance_profile OceanAws#iam_instance_profile}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#id OceanAws#id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.imageId">image_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#image_id OceanAws#image_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.instanceMetadataOptions">instance_metadata_options</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptions">OceanAwsInstanceMetadataOptions</a></code> | instance_metadata_options block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.keyName">key_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#key_name OceanAws#key_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.loadBalancers">load_balancers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancers">OceanAwsLoadBalancers</a>]]</code> | load_balancers block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.logging">logging</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLogging">OceanAwsLogging</a></code> | logging block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.maxSize">max_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#max_size OceanAws#max_size}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.minSize">min_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#min_size OceanAws#min_size}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.monitoring">monitoring</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#monitoring OceanAws#monitoring}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#name OceanAws#name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#region OceanAws#region}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.rootVolumeSize">root_volume_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#root_volume_size OceanAws#root_volume_size}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.scheduledTask">scheduled_task</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTask">OceanAwsScheduledTask</a>]]</code> | scheduled_task block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.spotPercentage">spot_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#spot_percentage OceanAws#spot_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.spreadNodesBy">spread_nodes_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#spread_nodes_by OceanAws#spread_nodes_by}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.tags">tags</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTags">OceanAwsTags</a>]]</code> | tags block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.updatePolicy">update_policy</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicy">OceanAwsUpdatePolicy</a></code> | update_policy block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.useAsTemplateOnly">use_as_template_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#use_as_template_only OceanAws#use_as_template_only}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.userData">user_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#user_data OceanAws#user_data}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.utilizeCommitments">utilize_commitments</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#utilize_commitments OceanAws#utilize_commitments}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.utilizeReservedInstances">utilize_reserved_instances</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#utilize_reserved_instances OceanAws#utilize_reserved_instances}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.whitelist">whitelist</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#whitelist OceanAws#whitelist}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `security_groups`<sup>Required</sup> <a name="security_groups" id="@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.securityGroups"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#security_groups OceanAws#security_groups}.

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.subnetIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#subnet_ids OceanAws#subnet_ids}.

---

##### `associate_ipv6_address`<sup>Optional</sup> <a name="associate_ipv6_address" id="@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.associateIpv6Address"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#associate_ipv6_address OceanAws#associate_ipv6_address}.

---

##### `associate_public_ip_address`<sup>Optional</sup> <a name="associate_public_ip_address" id="@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.associatePublicIpAddress"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#associate_public_ip_address OceanAws#associate_public_ip_address}.

---

##### `autoscaler`<sup>Optional</sup> <a name="autoscaler" id="@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.autoscaler"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler">OceanAwsAutoscaler</a>

autoscaler block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#autoscaler OceanAws#autoscaler}

---

##### `blacklist`<sup>Optional</sup> <a name="blacklist" id="@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.blacklist"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#blacklist OceanAws#blacklist}.

---

##### `block_device_mappings`<sup>Optional</sup> <a name="block_device_mappings" id="@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.blockDeviceMappings"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappings">OceanAwsBlockDeviceMappings</a>]]

block_device_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#block_device_mappings OceanAws#block_device_mappings}

---

##### `cluster_orientation`<sup>Optional</sup> <a name="cluster_orientation" id="@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.clusterOrientation"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientation">OceanAwsClusterOrientation</a>]]

cluster_orientation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#cluster_orientation OceanAws#cluster_orientation}

---

##### `controller_id`<sup>Optional</sup> <a name="controller_id" id="@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.controllerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#controller_id OceanAws#controller_id}.

---

##### `desired_capacity`<sup>Optional</sup> <a name="desired_capacity" id="@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.desiredCapacity"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#desired_capacity OceanAws#desired_capacity}.

---

##### `draining_timeout`<sup>Optional</sup> <a name="draining_timeout" id="@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.drainingTimeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#draining_timeout OceanAws#draining_timeout}.

---

##### `ebs_optimized`<sup>Optional</sup> <a name="ebs_optimized" id="@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.ebsOptimized"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#ebs_optimized OceanAws#ebs_optimized}.

---

##### `fallback_to_ondemand`<sup>Optional</sup> <a name="fallback_to_ondemand" id="@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.fallbackToOndemand"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#fallback_to_ondemand OceanAws#fallback_to_ondemand}.

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.filters"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters">OceanAwsFilters</a>

filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#filters OceanAws#filters}

---

##### `grace_period`<sup>Optional</sup> <a name="grace_period" id="@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.gracePeriod"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#grace_period OceanAws#grace_period}.

---

##### `iam_instance_profile`<sup>Optional</sup> <a name="iam_instance_profile" id="@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.iamInstanceProfile"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#iam_instance_profile OceanAws#iam_instance_profile}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#id OceanAws#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `image_id`<sup>Optional</sup> <a name="image_id" id="@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.imageId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#image_id OceanAws#image_id}.

---

##### `instance_metadata_options`<sup>Optional</sup> <a name="instance_metadata_options" id="@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.instanceMetadataOptions"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptions">OceanAwsInstanceMetadataOptions</a>

instance_metadata_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#instance_metadata_options OceanAws#instance_metadata_options}

---

##### `key_name`<sup>Optional</sup> <a name="key_name" id="@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.keyName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#key_name OceanAws#key_name}.

---

##### `load_balancers`<sup>Optional</sup> <a name="load_balancers" id="@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.loadBalancers"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancers">OceanAwsLoadBalancers</a>]]

load_balancers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#load_balancers OceanAws#load_balancers}

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.logging"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLogging">OceanAwsLogging</a>

logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#logging OceanAws#logging}

---

##### `max_size`<sup>Optional</sup> <a name="max_size" id="@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.maxSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#max_size OceanAws#max_size}.

---

##### `min_size`<sup>Optional</sup> <a name="min_size" id="@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.minSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#min_size OceanAws#min_size}.

---

##### `monitoring`<sup>Optional</sup> <a name="monitoring" id="@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.monitoring"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#monitoring OceanAws#monitoring}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#name OceanAws#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#region OceanAws#region}.

---

##### `root_volume_size`<sup>Optional</sup> <a name="root_volume_size" id="@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.rootVolumeSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#root_volume_size OceanAws#root_volume_size}.

---

##### `scheduled_task`<sup>Optional</sup> <a name="scheduled_task" id="@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.scheduledTask"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTask">OceanAwsScheduledTask</a>]]

scheduled_task block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#scheduled_task OceanAws#scheduled_task}

---

##### `spot_percentage`<sup>Optional</sup> <a name="spot_percentage" id="@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.spotPercentage"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#spot_percentage OceanAws#spot_percentage}.

---

##### `spread_nodes_by`<sup>Optional</sup> <a name="spread_nodes_by" id="@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.spreadNodesBy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#spread_nodes_by OceanAws#spread_nodes_by}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.tags"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTags">OceanAwsTags</a>]]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#tags OceanAws#tags}

---

##### `update_policy`<sup>Optional</sup> <a name="update_policy" id="@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.updatePolicy"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicy">OceanAwsUpdatePolicy</a>

update_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#update_policy OceanAws#update_policy}

---

##### `use_as_template_only`<sup>Optional</sup> <a name="use_as_template_only" id="@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.useAsTemplateOnly"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#use_as_template_only OceanAws#use_as_template_only}.

---

##### `user_data`<sup>Optional</sup> <a name="user_data" id="@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.userData"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#user_data OceanAws#user_data}.

---

##### `utilize_commitments`<sup>Optional</sup> <a name="utilize_commitments" id="@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.utilizeCommitments"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#utilize_commitments OceanAws#utilize_commitments}.

---

##### `utilize_reserved_instances`<sup>Optional</sup> <a name="utilize_reserved_instances" id="@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.utilizeReservedInstances"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#utilize_reserved_instances OceanAws#utilize_reserved_instances}.

---

##### `whitelist`<sup>Optional</sup> <a name="whitelist" id="@cdktf/provider-spotinst.oceanAws.OceanAws.Initializer.parameter.whitelist"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#whitelist OceanAws#whitelist}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.putAutoscaler">put_autoscaler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.putBlockDeviceMappings">put_block_device_mappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.putClusterOrientation">put_cluster_orientation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.putFilters">put_filters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.putInstanceMetadataOptions">put_instance_metadata_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.putLoadBalancers">put_load_balancers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.putLogging">put_logging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.putScheduledTask">put_scheduled_task</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.putUpdatePolicy">put_update_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetAssociateIpv6Address">reset_associate_ipv6_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetAssociatePublicIpAddress">reset_associate_public_ip_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetAutoscaler">reset_autoscaler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetBlacklist">reset_blacklist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetBlockDeviceMappings">reset_block_device_mappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetClusterOrientation">reset_cluster_orientation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetControllerId">reset_controller_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetDesiredCapacity">reset_desired_capacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetDrainingTimeout">reset_draining_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetEbsOptimized">reset_ebs_optimized</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetFallbackToOndemand">reset_fallback_to_ondemand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetFilters">reset_filters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetGracePeriod">reset_grace_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetIamInstanceProfile">reset_iam_instance_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetImageId">reset_image_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetInstanceMetadataOptions">reset_instance_metadata_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetKeyName">reset_key_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetLoadBalancers">reset_load_balancers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetLogging">reset_logging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetMaxSize">reset_max_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetMinSize">reset_min_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetMonitoring">reset_monitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetRootVolumeSize">reset_root_volume_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetScheduledTask">reset_scheduled_task</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetSpotPercentage">reset_spot_percentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetSpreadNodesBy">reset_spread_nodes_by</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetUpdatePolicy">reset_update_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetUseAsTemplateOnly">reset_use_as_template_only</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetUserData">reset_user_data</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetUtilizeCommitments">reset_utilize_commitments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetUtilizeReservedInstances">reset_utilize_reserved_instances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.resetWhitelist">reset_whitelist</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanAws.OceanAws.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-spotinst.oceanAws.OceanAws.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.oceanAws.OceanAws.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAws.OceanAws.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-spotinst.oceanAws.OceanAws.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-spotinst.oceanAws.OceanAws.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-spotinst.oceanAws.OceanAws.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-spotinst.oceanAws.OceanAws.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAws.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAws.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAws.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAws.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAws.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAws.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAws.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAws.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAws.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAws.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAws.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAws.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAws.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAws.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAws.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAws.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAws.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAws.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAws.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAws.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_autoscaler` <a name="put_autoscaler" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putAutoscaler"></a>

```python
def put_autoscaler(
  auto_headroom_percentage: typing.Union[int, float] = None,
  autoscale_cooldown: typing.Union[int, float] = None,
  autoscale_down: OceanAwsAutoscalerAutoscaleDown = None,
  autoscale_headroom: OceanAwsAutoscalerAutoscaleHeadroom = None,
  autoscale_is_auto_config: typing.Union[bool, IResolvable] = None,
  autoscale_is_enabled: typing.Union[bool, IResolvable] = None,
  enable_automatic_and_manual_headroom: typing.Union[bool, IResolvable] = None,
  extended_resource_definitions: typing.List[str] = None,
  resource_limits: OceanAwsAutoscalerResourceLimits = None
) -> None
```

###### `auto_headroom_percentage`<sup>Optional</sup> <a name="auto_headroom_percentage" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putAutoscaler.parameter.autoHeadroomPercentage"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#auto_headroom_percentage OceanAws#auto_headroom_percentage}.

---

###### `autoscale_cooldown`<sup>Optional</sup> <a name="autoscale_cooldown" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putAutoscaler.parameter.autoscaleCooldown"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#autoscale_cooldown OceanAws#autoscale_cooldown}.

---

###### `autoscale_down`<sup>Optional</sup> <a name="autoscale_down" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putAutoscaler.parameter.autoscaleDown"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDown">OceanAwsAutoscalerAutoscaleDown</a>

autoscale_down block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#autoscale_down OceanAws#autoscale_down}

---

###### `autoscale_headroom`<sup>Optional</sup> <a name="autoscale_headroom" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putAutoscaler.parameter.autoscaleHeadroom"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroom">OceanAwsAutoscalerAutoscaleHeadroom</a>

autoscale_headroom block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#autoscale_headroom OceanAws#autoscale_headroom}

---

###### `autoscale_is_auto_config`<sup>Optional</sup> <a name="autoscale_is_auto_config" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putAutoscaler.parameter.autoscaleIsAutoConfig"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#autoscale_is_auto_config OceanAws#autoscale_is_auto_config}.

---

###### `autoscale_is_enabled`<sup>Optional</sup> <a name="autoscale_is_enabled" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putAutoscaler.parameter.autoscaleIsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#autoscale_is_enabled OceanAws#autoscale_is_enabled}.

---

###### `enable_automatic_and_manual_headroom`<sup>Optional</sup> <a name="enable_automatic_and_manual_headroom" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putAutoscaler.parameter.enableAutomaticAndManualHeadroom"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#enable_automatic_and_manual_headroom OceanAws#enable_automatic_and_manual_headroom}.

---

###### `extended_resource_definitions`<sup>Optional</sup> <a name="extended_resource_definitions" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putAutoscaler.parameter.extendedResourceDefinitions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#extended_resource_definitions OceanAws#extended_resource_definitions}.

---

###### `resource_limits`<sup>Optional</sup> <a name="resource_limits" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putAutoscaler.parameter.resourceLimits"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimits">OceanAwsAutoscalerResourceLimits</a>

resource_limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#resource_limits OceanAws#resource_limits}

---

##### `put_block_device_mappings` <a name="put_block_device_mappings" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putBlockDeviceMappings"></a>

```python
def put_block_device_mappings(
  value: typing.Union[IResolvable, typing.List[OceanAwsBlockDeviceMappings]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putBlockDeviceMappings.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappings">OceanAwsBlockDeviceMappings</a>]]

---

##### `put_cluster_orientation` <a name="put_cluster_orientation" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putClusterOrientation"></a>

```python
def put_cluster_orientation(
  value: typing.Union[IResolvable, typing.List[OceanAwsClusterOrientation]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putClusterOrientation.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientation">OceanAwsClusterOrientation</a>]]

---

##### `put_filters` <a name="put_filters" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putFilters"></a>

```python
def put_filters(
  architectures: typing.List[str] = None,
  categories: typing.List[str] = None,
  disk_types: typing.List[str] = None,
  exclude_families: typing.List[str] = None,
  exclude_metal: typing.Union[bool, IResolvable] = None,
  hypervisor: typing.List[str] = None,
  include_families: typing.List[str] = None,
  is_ena_supported: str = None,
  max_gpu: typing.Union[int, float] = None,
  max_memory_gib: typing.Union[int, float] = None,
  max_network_performance: typing.Union[int, float] = None,
  max_vcpu: typing.Union[int, float] = None,
  min_enis: typing.Union[int, float] = None,
  min_gpu: typing.Union[int, float] = None,
  min_memory_gib: typing.Union[int, float] = None,
  min_network_performance: typing.Union[int, float] = None,
  min_vcpu: typing.Union[int, float] = None,
  root_device_types: typing.List[str] = None,
  virtualization_types: typing.List[str] = None
) -> None
```

###### `architectures`<sup>Optional</sup> <a name="architectures" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putFilters.parameter.architectures"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#architectures OceanAws#architectures}.

---

###### `categories`<sup>Optional</sup> <a name="categories" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putFilters.parameter.categories"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#categories OceanAws#categories}.

---

###### `disk_types`<sup>Optional</sup> <a name="disk_types" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putFilters.parameter.diskTypes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#disk_types OceanAws#disk_types}.

---

###### `exclude_families`<sup>Optional</sup> <a name="exclude_families" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putFilters.parameter.excludeFamilies"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#exclude_families OceanAws#exclude_families}.

---

###### `exclude_metal`<sup>Optional</sup> <a name="exclude_metal" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putFilters.parameter.excludeMetal"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#exclude_metal OceanAws#exclude_metal}.

---

###### `hypervisor`<sup>Optional</sup> <a name="hypervisor" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putFilters.parameter.hypervisor"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#hypervisor OceanAws#hypervisor}.

---

###### `include_families`<sup>Optional</sup> <a name="include_families" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putFilters.parameter.includeFamilies"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#include_families OceanAws#include_families}.

---

###### `is_ena_supported`<sup>Optional</sup> <a name="is_ena_supported" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putFilters.parameter.isEnaSupported"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#is_ena_supported OceanAws#is_ena_supported}.

---

###### `max_gpu`<sup>Optional</sup> <a name="max_gpu" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putFilters.parameter.maxGpu"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#max_gpu OceanAws#max_gpu}.

---

###### `max_memory_gib`<sup>Optional</sup> <a name="max_memory_gib" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putFilters.parameter.maxMemoryGib"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#max_memory_gib OceanAws#max_memory_gib}.

---

###### `max_network_performance`<sup>Optional</sup> <a name="max_network_performance" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putFilters.parameter.maxNetworkPerformance"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#max_network_performance OceanAws#max_network_performance}.

---

###### `max_vcpu`<sup>Optional</sup> <a name="max_vcpu" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putFilters.parameter.maxVcpu"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#max_vcpu OceanAws#max_vcpu}.

---

###### `min_enis`<sup>Optional</sup> <a name="min_enis" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putFilters.parameter.minEnis"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#min_enis OceanAws#min_enis}.

---

###### `min_gpu`<sup>Optional</sup> <a name="min_gpu" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putFilters.parameter.minGpu"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#min_gpu OceanAws#min_gpu}.

---

###### `min_memory_gib`<sup>Optional</sup> <a name="min_memory_gib" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putFilters.parameter.minMemoryGib"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#min_memory_gib OceanAws#min_memory_gib}.

---

###### `min_network_performance`<sup>Optional</sup> <a name="min_network_performance" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putFilters.parameter.minNetworkPerformance"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#min_network_performance OceanAws#min_network_performance}.

---

###### `min_vcpu`<sup>Optional</sup> <a name="min_vcpu" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putFilters.parameter.minVcpu"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#min_vcpu OceanAws#min_vcpu}.

---

###### `root_device_types`<sup>Optional</sup> <a name="root_device_types" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putFilters.parameter.rootDeviceTypes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#root_device_types OceanAws#root_device_types}.

---

###### `virtualization_types`<sup>Optional</sup> <a name="virtualization_types" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putFilters.parameter.virtualizationTypes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#virtualization_types OceanAws#virtualization_types}.

---

##### `put_instance_metadata_options` <a name="put_instance_metadata_options" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putInstanceMetadataOptions"></a>

```python
def put_instance_metadata_options(
  http_tokens: str,
  http_put_response_hop_limit: typing.Union[int, float] = None
) -> None
```

###### `http_tokens`<sup>Required</sup> <a name="http_tokens" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putInstanceMetadataOptions.parameter.httpTokens"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#http_tokens OceanAws#http_tokens}.

---

###### `http_put_response_hop_limit`<sup>Optional</sup> <a name="http_put_response_hop_limit" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putInstanceMetadataOptions.parameter.httpPutResponseHopLimit"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#http_put_response_hop_limit OceanAws#http_put_response_hop_limit}.

---

##### `put_load_balancers` <a name="put_load_balancers" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putLoadBalancers"></a>

```python
def put_load_balancers(
  value: typing.Union[IResolvable, typing.List[OceanAwsLoadBalancers]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putLoadBalancers.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancers">OceanAwsLoadBalancers</a>]]

---

##### `put_logging` <a name="put_logging" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putLogging"></a>

```python
def put_logging(
  export: OceanAwsLoggingExport = None
) -> None
```

###### `export`<sup>Optional</sup> <a name="export" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putLogging.parameter.export"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExport">OceanAwsLoggingExport</a>

export block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#export OceanAws#export}

---

##### `put_scheduled_task` <a name="put_scheduled_task" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putScheduledTask"></a>

```python
def put_scheduled_task(
  value: typing.Union[IResolvable, typing.List[OceanAwsScheduledTask]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putScheduledTask.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTask">OceanAwsScheduledTask</a>]]

---

##### `put_tags` <a name="put_tags" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putTags"></a>

```python
def put_tags(
  value: typing.Union[IResolvable, typing.List[OceanAwsTags]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putTags.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTags">OceanAwsTags</a>]]

---

##### `put_update_policy` <a name="put_update_policy" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putUpdatePolicy"></a>

```python
def put_update_policy(
  should_roll: typing.Union[bool, IResolvable],
  auto_apply_tags: typing.Union[bool, IResolvable] = None,
  conditioned_roll: typing.Union[bool, IResolvable] = None,
  roll_config: OceanAwsUpdatePolicyRollConfig = None
) -> None
```

###### `should_roll`<sup>Required</sup> <a name="should_roll" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putUpdatePolicy.parameter.shouldRoll"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#should_roll OceanAws#should_roll}.

---

###### `auto_apply_tags`<sup>Optional</sup> <a name="auto_apply_tags" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putUpdatePolicy.parameter.autoApplyTags"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#auto_apply_tags OceanAws#auto_apply_tags}.

---

###### `conditioned_roll`<sup>Optional</sup> <a name="conditioned_roll" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putUpdatePolicy.parameter.conditionedRoll"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#conditioned_roll OceanAws#conditioned_roll}.

---

###### `roll_config`<sup>Optional</sup> <a name="roll_config" id="@cdktf/provider-spotinst.oceanAws.OceanAws.putUpdatePolicy.parameter.rollConfig"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfig">OceanAwsUpdatePolicyRollConfig</a>

roll_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#roll_config OceanAws#roll_config}

---

##### `reset_associate_ipv6_address` <a name="reset_associate_ipv6_address" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetAssociateIpv6Address"></a>

```python
def reset_associate_ipv6_address() -> None
```

##### `reset_associate_public_ip_address` <a name="reset_associate_public_ip_address" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetAssociatePublicIpAddress"></a>

```python
def reset_associate_public_ip_address() -> None
```

##### `reset_autoscaler` <a name="reset_autoscaler" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetAutoscaler"></a>

```python
def reset_autoscaler() -> None
```

##### `reset_blacklist` <a name="reset_blacklist" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetBlacklist"></a>

```python
def reset_blacklist() -> None
```

##### `reset_block_device_mappings` <a name="reset_block_device_mappings" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetBlockDeviceMappings"></a>

```python
def reset_block_device_mappings() -> None
```

##### `reset_cluster_orientation` <a name="reset_cluster_orientation" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetClusterOrientation"></a>

```python
def reset_cluster_orientation() -> None
```

##### `reset_controller_id` <a name="reset_controller_id" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetControllerId"></a>

```python
def reset_controller_id() -> None
```

##### `reset_desired_capacity` <a name="reset_desired_capacity" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetDesiredCapacity"></a>

```python
def reset_desired_capacity() -> None
```

##### `reset_draining_timeout` <a name="reset_draining_timeout" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetDrainingTimeout"></a>

```python
def reset_draining_timeout() -> None
```

##### `reset_ebs_optimized` <a name="reset_ebs_optimized" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetEbsOptimized"></a>

```python
def reset_ebs_optimized() -> None
```

##### `reset_fallback_to_ondemand` <a name="reset_fallback_to_ondemand" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetFallbackToOndemand"></a>

```python
def reset_fallback_to_ondemand() -> None
```

##### `reset_filters` <a name="reset_filters" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetFilters"></a>

```python
def reset_filters() -> None
```

##### `reset_grace_period` <a name="reset_grace_period" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetGracePeriod"></a>

```python
def reset_grace_period() -> None
```

##### `reset_iam_instance_profile` <a name="reset_iam_instance_profile" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetIamInstanceProfile"></a>

```python
def reset_iam_instance_profile() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_image_id` <a name="reset_image_id" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetImageId"></a>

```python
def reset_image_id() -> None
```

##### `reset_instance_metadata_options` <a name="reset_instance_metadata_options" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetInstanceMetadataOptions"></a>

```python
def reset_instance_metadata_options() -> None
```

##### `reset_key_name` <a name="reset_key_name" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetKeyName"></a>

```python
def reset_key_name() -> None
```

##### `reset_load_balancers` <a name="reset_load_balancers" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetLoadBalancers"></a>

```python
def reset_load_balancers() -> None
```

##### `reset_logging` <a name="reset_logging" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetLogging"></a>

```python
def reset_logging() -> None
```

##### `reset_max_size` <a name="reset_max_size" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetMaxSize"></a>

```python
def reset_max_size() -> None
```

##### `reset_min_size` <a name="reset_min_size" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetMinSize"></a>

```python
def reset_min_size() -> None
```

##### `reset_monitoring` <a name="reset_monitoring" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetMonitoring"></a>

```python
def reset_monitoring() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_root_volume_size` <a name="reset_root_volume_size" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetRootVolumeSize"></a>

```python
def reset_root_volume_size() -> None
```

##### `reset_scheduled_task` <a name="reset_scheduled_task" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetScheduledTask"></a>

```python
def reset_scheduled_task() -> None
```

##### `reset_spot_percentage` <a name="reset_spot_percentage" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetSpotPercentage"></a>

```python
def reset_spot_percentage() -> None
```

##### `reset_spread_nodes_by` <a name="reset_spread_nodes_by" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetSpreadNodesBy"></a>

```python
def reset_spread_nodes_by() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_update_policy` <a name="reset_update_policy" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetUpdatePolicy"></a>

```python
def reset_update_policy() -> None
```

##### `reset_use_as_template_only` <a name="reset_use_as_template_only" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetUseAsTemplateOnly"></a>

```python
def reset_use_as_template_only() -> None
```

##### `reset_user_data` <a name="reset_user_data" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetUserData"></a>

```python
def reset_user_data() -> None
```

##### `reset_utilize_commitments` <a name="reset_utilize_commitments" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetUtilizeCommitments"></a>

```python
def reset_utilize_commitments() -> None
```

##### `reset_utilize_reserved_instances` <a name="reset_utilize_reserved_instances" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetUtilizeReservedInstances"></a>

```python
def reset_utilize_reserved_instances() -> None
```

##### `reset_whitelist` <a name="reset_whitelist" id="@cdktf/provider-spotinst.oceanAws.OceanAws.resetWhitelist"></a>

```python
def reset_whitelist() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-spotinst.oceanAws.OceanAws.isConstruct"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_aws

oceanAws.OceanAws.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanAws.OceanAws.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-spotinst.oceanAws.OceanAws.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_aws

oceanAws.OceanAws.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanAws.OceanAws.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-spotinst.oceanAws.OceanAws.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_aws

oceanAws.OceanAws.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanAws.OceanAws.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.autoscaler">autoscaler</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference">OceanAwsAutoscalerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.blockDeviceMappings">block_device_mappings</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsList">OceanAwsBlockDeviceMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.clusterOrientation">cluster_orientation</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList">OceanAwsClusterOrientationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.filters">filters</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference">OceanAwsFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.instanceMetadataOptions">instance_metadata_options</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference">OceanAwsInstanceMetadataOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.loadBalancers">load_balancers</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList">OceanAwsLoadBalancersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.logging">logging</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference">OceanAwsLoggingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.scheduledTask">scheduled_task</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskList">OceanAwsScheduledTaskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList">OceanAwsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.updatePolicy">update_policy</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference">OceanAwsUpdatePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.associateIpv6AddressInput">associate_ipv6_address_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.associatePublicIpAddressInput">associate_public_ip_address_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.autoscalerInput">autoscaler_input</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler">OceanAwsAutoscaler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.blacklistInput">blacklist_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.blockDeviceMappingsInput">block_device_mappings_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappings">OceanAwsBlockDeviceMappings</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.clusterOrientationInput">cluster_orientation_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientation">OceanAwsClusterOrientation</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.controllerIdInput">controller_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.desiredCapacityInput">desired_capacity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.drainingTimeoutInput">draining_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.ebsOptimizedInput">ebs_optimized_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.fallbackToOndemandInput">fallback_to_ondemand_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.filtersInput">filters_input</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters">OceanAwsFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.gracePeriodInput">grace_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.iamInstanceProfileInput">iam_instance_profile_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.imageIdInput">image_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.instanceMetadataOptionsInput">instance_metadata_options_input</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptions">OceanAwsInstanceMetadataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.keyNameInput">key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.loadBalancersInput">load_balancers_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancers">OceanAwsLoadBalancers</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.loggingInput">logging_input</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLogging">OceanAwsLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.maxSizeInput">max_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.minSizeInput">min_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.monitoringInput">monitoring_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.rootVolumeSizeInput">root_volume_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.scheduledTaskInput">scheduled_task_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTask">OceanAwsScheduledTask</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.securityGroupsInput">security_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.spotPercentageInput">spot_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.spreadNodesByInput">spread_nodes_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.subnetIdsInput">subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.tagsInput">tags_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTags">OceanAwsTags</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.updatePolicyInput">update_policy_input</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicy">OceanAwsUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.useAsTemplateOnlyInput">use_as_template_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.userDataInput">user_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.utilizeCommitmentsInput">utilize_commitments_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.utilizeReservedInstancesInput">utilize_reserved_instances_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.whitelistInput">whitelist_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.associateIpv6Address">associate_ipv6_address</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.associatePublicIpAddress">associate_public_ip_address</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.blacklist">blacklist</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.controllerId">controller_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.desiredCapacity">desired_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.drainingTimeout">draining_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.ebsOptimized">ebs_optimized</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.fallbackToOndemand">fallback_to_ondemand</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.gracePeriod">grace_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.iamInstanceProfile">iam_instance_profile</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.imageId">image_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.keyName">key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.maxSize">max_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.minSize">min_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.monitoring">monitoring</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.rootVolumeSize">root_volume_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.spotPercentage">spot_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.spreadNodesBy">spread_nodes_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.useAsTemplateOnly">use_as_template_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.userData">user_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.utilizeCommitments">utilize_commitments</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.utilizeReservedInstances">utilize_reserved_instances</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.whitelist">whitelist</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `autoscaler`<sup>Required</sup> <a name="autoscaler" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.autoscaler"></a>

```python
autoscaler: OceanAwsAutoscalerOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference">OceanAwsAutoscalerOutputReference</a>

---

##### `block_device_mappings`<sup>Required</sup> <a name="block_device_mappings" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.blockDeviceMappings"></a>

```python
block_device_mappings: OceanAwsBlockDeviceMappingsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsList">OceanAwsBlockDeviceMappingsList</a>

---

##### `cluster_orientation`<sup>Required</sup> <a name="cluster_orientation" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.clusterOrientation"></a>

```python
cluster_orientation: OceanAwsClusterOrientationList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList">OceanAwsClusterOrientationList</a>

---

##### `filters`<sup>Required</sup> <a name="filters" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.filters"></a>

```python
filters: OceanAwsFiltersOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference">OceanAwsFiltersOutputReference</a>

---

##### `instance_metadata_options`<sup>Required</sup> <a name="instance_metadata_options" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.instanceMetadataOptions"></a>

```python
instance_metadata_options: OceanAwsInstanceMetadataOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference">OceanAwsInstanceMetadataOptionsOutputReference</a>

---

##### `load_balancers`<sup>Required</sup> <a name="load_balancers" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.loadBalancers"></a>

```python
load_balancers: OceanAwsLoadBalancersList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList">OceanAwsLoadBalancersList</a>

---

##### `logging`<sup>Required</sup> <a name="logging" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.logging"></a>

```python
logging: OceanAwsLoggingOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference">OceanAwsLoggingOutputReference</a>

---

##### `scheduled_task`<sup>Required</sup> <a name="scheduled_task" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.scheduledTask"></a>

```python
scheduled_task: OceanAwsScheduledTaskList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskList">OceanAwsScheduledTaskList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.tags"></a>

```python
tags: OceanAwsTagsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList">OceanAwsTagsList</a>

---

##### `update_policy`<sup>Required</sup> <a name="update_policy" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.updatePolicy"></a>

```python
update_policy: OceanAwsUpdatePolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference">OceanAwsUpdatePolicyOutputReference</a>

---

##### `associate_ipv6_address_input`<sup>Optional</sup> <a name="associate_ipv6_address_input" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.associateIpv6AddressInput"></a>

```python
associate_ipv6_address_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `associate_public_ip_address_input`<sup>Optional</sup> <a name="associate_public_ip_address_input" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.associatePublicIpAddressInput"></a>

```python
associate_public_ip_address_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `autoscaler_input`<sup>Optional</sup> <a name="autoscaler_input" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.autoscalerInput"></a>

```python
autoscaler_input: OceanAwsAutoscaler
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler">OceanAwsAutoscaler</a>

---

##### `blacklist_input`<sup>Optional</sup> <a name="blacklist_input" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.blacklistInput"></a>

```python
blacklist_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `block_device_mappings_input`<sup>Optional</sup> <a name="block_device_mappings_input" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.blockDeviceMappingsInput"></a>

```python
block_device_mappings_input: typing.Union[IResolvable, typing.List[OceanAwsBlockDeviceMappings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappings">OceanAwsBlockDeviceMappings</a>]]

---

##### `cluster_orientation_input`<sup>Optional</sup> <a name="cluster_orientation_input" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.clusterOrientationInput"></a>

```python
cluster_orientation_input: typing.Union[IResolvable, typing.List[OceanAwsClusterOrientation]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientation">OceanAwsClusterOrientation</a>]]

---

##### `controller_id_input`<sup>Optional</sup> <a name="controller_id_input" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.controllerIdInput"></a>

```python
controller_id_input: str
```

- *Type:* str

---

##### `desired_capacity_input`<sup>Optional</sup> <a name="desired_capacity_input" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.desiredCapacityInput"></a>

```python
desired_capacity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `draining_timeout_input`<sup>Optional</sup> <a name="draining_timeout_input" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.drainingTimeoutInput"></a>

```python
draining_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ebs_optimized_input`<sup>Optional</sup> <a name="ebs_optimized_input" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.ebsOptimizedInput"></a>

```python
ebs_optimized_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `fallback_to_ondemand_input`<sup>Optional</sup> <a name="fallback_to_ondemand_input" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.fallbackToOndemandInput"></a>

```python
fallback_to_ondemand_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filters_input`<sup>Optional</sup> <a name="filters_input" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.filtersInput"></a>

```python
filters_input: OceanAwsFilters
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters">OceanAwsFilters</a>

---

##### `grace_period_input`<sup>Optional</sup> <a name="grace_period_input" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.gracePeriodInput"></a>

```python
grace_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `iam_instance_profile_input`<sup>Optional</sup> <a name="iam_instance_profile_input" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.iamInstanceProfileInput"></a>

```python
iam_instance_profile_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `image_id_input`<sup>Optional</sup> <a name="image_id_input" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.imageIdInput"></a>

```python
image_id_input: str
```

- *Type:* str

---

##### `instance_metadata_options_input`<sup>Optional</sup> <a name="instance_metadata_options_input" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.instanceMetadataOptionsInput"></a>

```python
instance_metadata_options_input: OceanAwsInstanceMetadataOptions
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptions">OceanAwsInstanceMetadataOptions</a>

---

##### `key_name_input`<sup>Optional</sup> <a name="key_name_input" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.keyNameInput"></a>

```python
key_name_input: str
```

- *Type:* str

---

##### `load_balancers_input`<sup>Optional</sup> <a name="load_balancers_input" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.loadBalancersInput"></a>

```python
load_balancers_input: typing.Union[IResolvable, typing.List[OceanAwsLoadBalancers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancers">OceanAwsLoadBalancers</a>]]

---

##### `logging_input`<sup>Optional</sup> <a name="logging_input" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.loggingInput"></a>

```python
logging_input: OceanAwsLogging
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLogging">OceanAwsLogging</a>

---

##### `max_size_input`<sup>Optional</sup> <a name="max_size_input" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.maxSizeInput"></a>

```python
max_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_size_input`<sup>Optional</sup> <a name="min_size_input" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.minSizeInput"></a>

```python
min_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `monitoring_input`<sup>Optional</sup> <a name="monitoring_input" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.monitoringInput"></a>

```python
monitoring_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `root_volume_size_input`<sup>Optional</sup> <a name="root_volume_size_input" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.rootVolumeSizeInput"></a>

```python
root_volume_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scheduled_task_input`<sup>Optional</sup> <a name="scheduled_task_input" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.scheduledTaskInput"></a>

```python
scheduled_task_input: typing.Union[IResolvable, typing.List[OceanAwsScheduledTask]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTask">OceanAwsScheduledTask</a>]]

---

##### `security_groups_input`<sup>Optional</sup> <a name="security_groups_input" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.securityGroupsInput"></a>

```python
security_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `spot_percentage_input`<sup>Optional</sup> <a name="spot_percentage_input" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.spotPercentageInput"></a>

```python
spot_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `spread_nodes_by_input`<sup>Optional</sup> <a name="spread_nodes_by_input" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.spreadNodesByInput"></a>

```python
spread_nodes_by_input: str
```

- *Type:* str

---

##### `subnet_ids_input`<sup>Optional</sup> <a name="subnet_ids_input" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.subnetIdsInput"></a>

```python
subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.tagsInput"></a>

```python
tags_input: typing.Union[IResolvable, typing.List[OceanAwsTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTags">OceanAwsTags</a>]]

---

##### `update_policy_input`<sup>Optional</sup> <a name="update_policy_input" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.updatePolicyInput"></a>

```python
update_policy_input: OceanAwsUpdatePolicy
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicy">OceanAwsUpdatePolicy</a>

---

##### `use_as_template_only_input`<sup>Optional</sup> <a name="use_as_template_only_input" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.useAsTemplateOnlyInput"></a>

```python
use_as_template_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `user_data_input`<sup>Optional</sup> <a name="user_data_input" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.userDataInput"></a>

```python
user_data_input: str
```

- *Type:* str

---

##### `utilize_commitments_input`<sup>Optional</sup> <a name="utilize_commitments_input" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.utilizeCommitmentsInput"></a>

```python
utilize_commitments_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `utilize_reserved_instances_input`<sup>Optional</sup> <a name="utilize_reserved_instances_input" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.utilizeReservedInstancesInput"></a>

```python
utilize_reserved_instances_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `whitelist_input`<sup>Optional</sup> <a name="whitelist_input" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.whitelistInput"></a>

```python
whitelist_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `associate_ipv6_address`<sup>Required</sup> <a name="associate_ipv6_address" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.associateIpv6Address"></a>

```python
associate_ipv6_address: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `associate_public_ip_address`<sup>Required</sup> <a name="associate_public_ip_address" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.associatePublicIpAddress"></a>

```python
associate_public_ip_address: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `blacklist`<sup>Required</sup> <a name="blacklist" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.blacklist"></a>

```python
blacklist: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `controller_id`<sup>Required</sup> <a name="controller_id" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.controllerId"></a>

```python
controller_id: str
```

- *Type:* str

---

##### `desired_capacity`<sup>Required</sup> <a name="desired_capacity" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.desiredCapacity"></a>

```python
desired_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `draining_timeout`<sup>Required</sup> <a name="draining_timeout" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.drainingTimeout"></a>

```python
draining_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ebs_optimized`<sup>Required</sup> <a name="ebs_optimized" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.ebsOptimized"></a>

```python
ebs_optimized: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `fallback_to_ondemand`<sup>Required</sup> <a name="fallback_to_ondemand" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.fallbackToOndemand"></a>

```python
fallback_to_ondemand: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `grace_period`<sup>Required</sup> <a name="grace_period" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.gracePeriod"></a>

```python
grace_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `iam_instance_profile`<sup>Required</sup> <a name="iam_instance_profile" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.iamInstanceProfile"></a>

```python
iam_instance_profile: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `image_id`<sup>Required</sup> <a name="image_id" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.imageId"></a>

```python
image_id: str
```

- *Type:* str

---

##### `key_name`<sup>Required</sup> <a name="key_name" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.keyName"></a>

```python
key_name: str
```

- *Type:* str

---

##### `max_size`<sup>Required</sup> <a name="max_size" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.maxSize"></a>

```python
max_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_size`<sup>Required</sup> <a name="min_size" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.minSize"></a>

```python
min_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `monitoring`<sup>Required</sup> <a name="monitoring" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.monitoring"></a>

```python
monitoring: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `root_volume_size`<sup>Required</sup> <a name="root_volume_size" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.rootVolumeSize"></a>

```python
root_volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `security_groups`<sup>Required</sup> <a name="security_groups" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.securityGroups"></a>

```python
security_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `spot_percentage`<sup>Required</sup> <a name="spot_percentage" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.spotPercentage"></a>

```python
spot_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `spread_nodes_by`<sup>Required</sup> <a name="spread_nodes_by" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.spreadNodesBy"></a>

```python
spread_nodes_by: str
```

- *Type:* str

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `use_as_template_only`<sup>Required</sup> <a name="use_as_template_only" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.useAsTemplateOnly"></a>

```python
use_as_template_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `user_data`<sup>Required</sup> <a name="user_data" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.userData"></a>

```python
user_data: str
```

- *Type:* str

---

##### `utilize_commitments`<sup>Required</sup> <a name="utilize_commitments" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.utilizeCommitments"></a>

```python
utilize_commitments: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `utilize_reserved_instances`<sup>Required</sup> <a name="utilize_reserved_instances" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.utilizeReservedInstances"></a>

```python
utilize_reserved_instances: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `whitelist`<sup>Required</sup> <a name="whitelist" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.whitelist"></a>

```python
whitelist: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAws.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-spotinst.oceanAws.OceanAws.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OceanAwsAutoscaler <a name="OceanAwsAutoscaler" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_aws

oceanAws.OceanAwsAutoscaler(
  auto_headroom_percentage: typing.Union[int, float] = None,
  autoscale_cooldown: typing.Union[int, float] = None,
  autoscale_down: OceanAwsAutoscalerAutoscaleDown = None,
  autoscale_headroom: OceanAwsAutoscalerAutoscaleHeadroom = None,
  autoscale_is_auto_config: typing.Union[bool, IResolvable] = None,
  autoscale_is_enabled: typing.Union[bool, IResolvable] = None,
  enable_automatic_and_manual_headroom: typing.Union[bool, IResolvable] = None,
  extended_resource_definitions: typing.List[str] = None,
  resource_limits: OceanAwsAutoscalerResourceLimits = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler.property.autoHeadroomPercentage">auto_headroom_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#auto_headroom_percentage OceanAws#auto_headroom_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler.property.autoscaleCooldown">autoscale_cooldown</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#autoscale_cooldown OceanAws#autoscale_cooldown}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler.property.autoscaleDown">autoscale_down</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDown">OceanAwsAutoscalerAutoscaleDown</a></code> | autoscale_down block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler.property.autoscaleHeadroom">autoscale_headroom</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroom">OceanAwsAutoscalerAutoscaleHeadroom</a></code> | autoscale_headroom block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler.property.autoscaleIsAutoConfig">autoscale_is_auto_config</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#autoscale_is_auto_config OceanAws#autoscale_is_auto_config}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler.property.autoscaleIsEnabled">autoscale_is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#autoscale_is_enabled OceanAws#autoscale_is_enabled}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler.property.enableAutomaticAndManualHeadroom">enable_automatic_and_manual_headroom</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#enable_automatic_and_manual_headroom OceanAws#enable_automatic_and_manual_headroom}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler.property.extendedResourceDefinitions">extended_resource_definitions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#extended_resource_definitions OceanAws#extended_resource_definitions}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler.property.resourceLimits">resource_limits</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimits">OceanAwsAutoscalerResourceLimits</a></code> | resource_limits block. |

---

##### `auto_headroom_percentage`<sup>Optional</sup> <a name="auto_headroom_percentage" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler.property.autoHeadroomPercentage"></a>

```python
auto_headroom_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#auto_headroom_percentage OceanAws#auto_headroom_percentage}.

---

##### `autoscale_cooldown`<sup>Optional</sup> <a name="autoscale_cooldown" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler.property.autoscaleCooldown"></a>

```python
autoscale_cooldown: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#autoscale_cooldown OceanAws#autoscale_cooldown}.

---

##### `autoscale_down`<sup>Optional</sup> <a name="autoscale_down" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler.property.autoscaleDown"></a>

```python
autoscale_down: OceanAwsAutoscalerAutoscaleDown
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDown">OceanAwsAutoscalerAutoscaleDown</a>

autoscale_down block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#autoscale_down OceanAws#autoscale_down}

---

##### `autoscale_headroom`<sup>Optional</sup> <a name="autoscale_headroom" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler.property.autoscaleHeadroom"></a>

```python
autoscale_headroom: OceanAwsAutoscalerAutoscaleHeadroom
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroom">OceanAwsAutoscalerAutoscaleHeadroom</a>

autoscale_headroom block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#autoscale_headroom OceanAws#autoscale_headroom}

---

##### `autoscale_is_auto_config`<sup>Optional</sup> <a name="autoscale_is_auto_config" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler.property.autoscaleIsAutoConfig"></a>

```python
autoscale_is_auto_config: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#autoscale_is_auto_config OceanAws#autoscale_is_auto_config}.

---

##### `autoscale_is_enabled`<sup>Optional</sup> <a name="autoscale_is_enabled" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler.property.autoscaleIsEnabled"></a>

```python
autoscale_is_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#autoscale_is_enabled OceanAws#autoscale_is_enabled}.

---

##### `enable_automatic_and_manual_headroom`<sup>Optional</sup> <a name="enable_automatic_and_manual_headroom" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler.property.enableAutomaticAndManualHeadroom"></a>

```python
enable_automatic_and_manual_headroom: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#enable_automatic_and_manual_headroom OceanAws#enable_automatic_and_manual_headroom}.

---

##### `extended_resource_definitions`<sup>Optional</sup> <a name="extended_resource_definitions" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler.property.extendedResourceDefinitions"></a>

```python
extended_resource_definitions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#extended_resource_definitions OceanAws#extended_resource_definitions}.

---

##### `resource_limits`<sup>Optional</sup> <a name="resource_limits" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler.property.resourceLimits"></a>

```python
resource_limits: OceanAwsAutoscalerResourceLimits
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimits">OceanAwsAutoscalerResourceLimits</a>

resource_limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#resource_limits OceanAws#resource_limits}

---

### OceanAwsAutoscalerAutoscaleDown <a name="OceanAwsAutoscalerAutoscaleDown" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDown"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDown.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_aws

oceanAws.OceanAwsAutoscalerAutoscaleDown(
  evaluation_periods: typing.Union[int, float] = None,
  max_scale_down_percentage: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDown.property.evaluationPeriods">evaluation_periods</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#evaluation_periods OceanAws#evaluation_periods}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDown.property.maxScaleDownPercentage">max_scale_down_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#max_scale_down_percentage OceanAws#max_scale_down_percentage}. |

---

##### `evaluation_periods`<sup>Optional</sup> <a name="evaluation_periods" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDown.property.evaluationPeriods"></a>

```python
evaluation_periods: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#evaluation_periods OceanAws#evaluation_periods}.

---

##### `max_scale_down_percentage`<sup>Optional</sup> <a name="max_scale_down_percentage" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDown.property.maxScaleDownPercentage"></a>

```python
max_scale_down_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#max_scale_down_percentage OceanAws#max_scale_down_percentage}.

---

### OceanAwsAutoscalerAutoscaleHeadroom <a name="OceanAwsAutoscalerAutoscaleHeadroom" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroom.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_aws

oceanAws.OceanAwsAutoscalerAutoscaleHeadroom(
  cpu_per_unit: typing.Union[int, float] = None,
  gpu_per_unit: typing.Union[int, float] = None,
  memory_per_unit: typing.Union[int, float] = None,
  num_of_units: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroom.property.cpuPerUnit">cpu_per_unit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#cpu_per_unit OceanAws#cpu_per_unit}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroom.property.gpuPerUnit">gpu_per_unit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#gpu_per_unit OceanAws#gpu_per_unit}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroom.property.memoryPerUnit">memory_per_unit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#memory_per_unit OceanAws#memory_per_unit}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroom.property.numOfUnits">num_of_units</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#num_of_units OceanAws#num_of_units}. |

---

##### `cpu_per_unit`<sup>Optional</sup> <a name="cpu_per_unit" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroom.property.cpuPerUnit"></a>

```python
cpu_per_unit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#cpu_per_unit OceanAws#cpu_per_unit}.

---

##### `gpu_per_unit`<sup>Optional</sup> <a name="gpu_per_unit" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroom.property.gpuPerUnit"></a>

```python
gpu_per_unit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#gpu_per_unit OceanAws#gpu_per_unit}.

---

##### `memory_per_unit`<sup>Optional</sup> <a name="memory_per_unit" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroom.property.memoryPerUnit"></a>

```python
memory_per_unit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#memory_per_unit OceanAws#memory_per_unit}.

---

##### `num_of_units`<sup>Optional</sup> <a name="num_of_units" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroom.property.numOfUnits"></a>

```python
num_of_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#num_of_units OceanAws#num_of_units}.

---

### OceanAwsAutoscalerResourceLimits <a name="OceanAwsAutoscalerResourceLimits" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimits.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_aws

oceanAws.OceanAwsAutoscalerResourceLimits(
  max_memory_gib: typing.Union[int, float] = None,
  max_vcpu: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimits.property.maxMemoryGib">max_memory_gib</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#max_memory_gib OceanAws#max_memory_gib}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimits.property.maxVcpu">max_vcpu</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#max_vcpu OceanAws#max_vcpu}. |

---

##### `max_memory_gib`<sup>Optional</sup> <a name="max_memory_gib" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimits.property.maxMemoryGib"></a>

```python
max_memory_gib: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#max_memory_gib OceanAws#max_memory_gib}.

---

##### `max_vcpu`<sup>Optional</sup> <a name="max_vcpu" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimits.property.maxVcpu"></a>

```python
max_vcpu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#max_vcpu OceanAws#max_vcpu}.

---

### OceanAwsBlockDeviceMappings <a name="OceanAwsBlockDeviceMappings" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappings.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_aws

oceanAws.OceanAwsBlockDeviceMappings(
  device_name: str = None,
  ebs: OceanAwsBlockDeviceMappingsEbs = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappings.property.deviceName">device_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#device_name OceanAws#device_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappings.property.ebs">ebs</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbs">OceanAwsBlockDeviceMappingsEbs</a></code> | ebs block. |

---

##### `device_name`<sup>Optional</sup> <a name="device_name" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappings.property.deviceName"></a>

```python
device_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#device_name OceanAws#device_name}.

---

##### `ebs`<sup>Optional</sup> <a name="ebs" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappings.property.ebs"></a>

```python
ebs: OceanAwsBlockDeviceMappingsEbs
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbs">OceanAwsBlockDeviceMappingsEbs</a>

ebs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#ebs OceanAws#ebs}

---

### OceanAwsBlockDeviceMappingsEbs <a name="OceanAwsBlockDeviceMappingsEbs" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbs.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_aws

oceanAws.OceanAwsBlockDeviceMappingsEbs(
  delete_on_termination: typing.Union[bool, IResolvable] = None,
  dynamic_volume_size: OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize = None,
  encrypted: typing.Union[bool, IResolvable] = None,
  iops: typing.Union[int, float] = None,
  kms_key_id: str = None,
  snapshot_id: str = None,
  throughput: typing.Union[int, float] = None,
  volume_size: typing.Union[int, float] = None,
  volume_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbs.property.deleteOnTermination">delete_on_termination</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#delete_on_termination OceanAws#delete_on_termination}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbs.property.dynamicVolumeSize">dynamic_volume_size</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize">OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize</a></code> | dynamic_volume_size block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbs.property.encrypted">encrypted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#encrypted OceanAws#encrypted}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbs.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#iops OceanAws#iops}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbs.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#kms_key_id OceanAws#kms_key_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbs.property.snapshotId">snapshot_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#snapshot_id OceanAws#snapshot_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbs.property.throughput">throughput</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#throughput OceanAws#throughput}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbs.property.volumeSize">volume_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#volume_size OceanAws#volume_size}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbs.property.volumeType">volume_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#volume_type OceanAws#volume_type}. |

---

##### `delete_on_termination`<sup>Optional</sup> <a name="delete_on_termination" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbs.property.deleteOnTermination"></a>

```python
delete_on_termination: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#delete_on_termination OceanAws#delete_on_termination}.

---

##### `dynamic_volume_size`<sup>Optional</sup> <a name="dynamic_volume_size" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbs.property.dynamicVolumeSize"></a>

```python
dynamic_volume_size: OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize">OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize</a>

dynamic_volume_size block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#dynamic_volume_size OceanAws#dynamic_volume_size}

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbs.property.encrypted"></a>

```python
encrypted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#encrypted OceanAws#encrypted}.

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbs.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#iops OceanAws#iops}.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbs.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#kms_key_id OceanAws#kms_key_id}.

---

##### `snapshot_id`<sup>Optional</sup> <a name="snapshot_id" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbs.property.snapshotId"></a>

```python
snapshot_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#snapshot_id OceanAws#snapshot_id}.

---

##### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbs.property.throughput"></a>

```python
throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#throughput OceanAws#throughput}.

---

##### `volume_size`<sup>Optional</sup> <a name="volume_size" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbs.property.volumeSize"></a>

```python
volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#volume_size OceanAws#volume_size}.

---

##### `volume_type`<sup>Optional</sup> <a name="volume_type" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbs.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#volume_type OceanAws#volume_type}.

---

### OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize <a name="OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_aws

oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize(
  base_size: typing.Union[int, float],
  resource: str,
  size_per_resource_unit: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize.property.baseSize">base_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#base_size OceanAws#base_size}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize.property.resource">resource</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#resource OceanAws#resource}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize.property.sizePerResourceUnit">size_per_resource_unit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#size_per_resource_unit OceanAws#size_per_resource_unit}. |

---

##### `base_size`<sup>Required</sup> <a name="base_size" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize.property.baseSize"></a>

```python
base_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#base_size OceanAws#base_size}.

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize.property.resource"></a>

```python
resource: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#resource OceanAws#resource}.

---

##### `size_per_resource_unit`<sup>Required</sup> <a name="size_per_resource_unit" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize.property.sizePerResourceUnit"></a>

```python
size_per_resource_unit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#size_per_resource_unit OceanAws#size_per_resource_unit}.

---

### OceanAwsClusterOrientation <a name="OceanAwsClusterOrientation" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientation.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_aws

oceanAws.OceanAwsClusterOrientation(
  availability_vs_cost: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientation.property.availabilityVsCost">availability_vs_cost</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#availability_vs_cost OceanAws#availability_vs_cost}. |

---

##### `availability_vs_cost`<sup>Optional</sup> <a name="availability_vs_cost" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientation.property.availabilityVsCost"></a>

```python
availability_vs_cost: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#availability_vs_cost OceanAws#availability_vs_cost}.

---

### OceanAwsConfig <a name="OceanAwsConfig" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_aws

oceanAws.OceanAwsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  security_groups: typing.List[str],
  subnet_ids: typing.List[str],
  associate_ipv6_address: typing.Union[bool, IResolvable] = None,
  associate_public_ip_address: typing.Union[bool, IResolvable] = None,
  autoscaler: OceanAwsAutoscaler = None,
  blacklist: typing.List[str] = None,
  block_device_mappings: typing.Union[IResolvable, typing.List[OceanAwsBlockDeviceMappings]] = None,
  cluster_orientation: typing.Union[IResolvable, typing.List[OceanAwsClusterOrientation]] = None,
  controller_id: str = None,
  desired_capacity: typing.Union[int, float] = None,
  draining_timeout: typing.Union[int, float] = None,
  ebs_optimized: typing.Union[bool, IResolvable] = None,
  fallback_to_ondemand: typing.Union[bool, IResolvable] = None,
  filters: OceanAwsFilters = None,
  grace_period: typing.Union[int, float] = None,
  iam_instance_profile: str = None,
  id: str = None,
  image_id: str = None,
  instance_metadata_options: OceanAwsInstanceMetadataOptions = None,
  key_name: str = None,
  load_balancers: typing.Union[IResolvable, typing.List[OceanAwsLoadBalancers]] = None,
  logging: OceanAwsLogging = None,
  max_size: typing.Union[int, float] = None,
  min_size: typing.Union[int, float] = None,
  monitoring: typing.Union[bool, IResolvable] = None,
  name: str = None,
  region: str = None,
  root_volume_size: typing.Union[int, float] = None,
  scheduled_task: typing.Union[IResolvable, typing.List[OceanAwsScheduledTask]] = None,
  spot_percentage: typing.Union[int, float] = None,
  spread_nodes_by: str = None,
  tags: typing.Union[IResolvable, typing.List[OceanAwsTags]] = None,
  update_policy: OceanAwsUpdatePolicy = None,
  use_as_template_only: typing.Union[bool, IResolvable] = None,
  user_data: str = None,
  utilize_commitments: typing.Union[bool, IResolvable] = None,
  utilize_reserved_instances: typing.Union[bool, IResolvable] = None,
  whitelist: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#security_groups OceanAws#security_groups}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#subnet_ids OceanAws#subnet_ids}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.associateIpv6Address">associate_ipv6_address</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#associate_ipv6_address OceanAws#associate_ipv6_address}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.associatePublicIpAddress">associate_public_ip_address</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#associate_public_ip_address OceanAws#associate_public_ip_address}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.autoscaler">autoscaler</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler">OceanAwsAutoscaler</a></code> | autoscaler block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.blacklist">blacklist</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#blacklist OceanAws#blacklist}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.blockDeviceMappings">block_device_mappings</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappings">OceanAwsBlockDeviceMappings</a>]]</code> | block_device_mappings block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.clusterOrientation">cluster_orientation</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientation">OceanAwsClusterOrientation</a>]]</code> | cluster_orientation block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.controllerId">controller_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#controller_id OceanAws#controller_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.desiredCapacity">desired_capacity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#desired_capacity OceanAws#desired_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.drainingTimeout">draining_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#draining_timeout OceanAws#draining_timeout}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.ebsOptimized">ebs_optimized</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#ebs_optimized OceanAws#ebs_optimized}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.fallbackToOndemand">fallback_to_ondemand</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#fallback_to_ondemand OceanAws#fallback_to_ondemand}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.filters">filters</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters">OceanAwsFilters</a></code> | filters block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.gracePeriod">grace_period</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#grace_period OceanAws#grace_period}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.iamInstanceProfile">iam_instance_profile</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#iam_instance_profile OceanAws#iam_instance_profile}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#id OceanAws#id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.imageId">image_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#image_id OceanAws#image_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.instanceMetadataOptions">instance_metadata_options</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptions">OceanAwsInstanceMetadataOptions</a></code> | instance_metadata_options block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.keyName">key_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#key_name OceanAws#key_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.loadBalancers">load_balancers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancers">OceanAwsLoadBalancers</a>]]</code> | load_balancers block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.logging">logging</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLogging">OceanAwsLogging</a></code> | logging block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.maxSize">max_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#max_size OceanAws#max_size}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.minSize">min_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#min_size OceanAws#min_size}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.monitoring">monitoring</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#monitoring OceanAws#monitoring}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#name OceanAws#name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#region OceanAws#region}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.rootVolumeSize">root_volume_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#root_volume_size OceanAws#root_volume_size}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.scheduledTask">scheduled_task</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTask">OceanAwsScheduledTask</a>]]</code> | scheduled_task block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.spotPercentage">spot_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#spot_percentage OceanAws#spot_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.spreadNodesBy">spread_nodes_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#spread_nodes_by OceanAws#spread_nodes_by}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.tags">tags</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTags">OceanAwsTags</a>]]</code> | tags block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.updatePolicy">update_policy</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicy">OceanAwsUpdatePolicy</a></code> | update_policy block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.useAsTemplateOnly">use_as_template_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#use_as_template_only OceanAws#use_as_template_only}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.userData">user_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#user_data OceanAws#user_data}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.utilizeCommitments">utilize_commitments</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#utilize_commitments OceanAws#utilize_commitments}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.utilizeReservedInstances">utilize_reserved_instances</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#utilize_reserved_instances OceanAws#utilize_reserved_instances}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.whitelist">whitelist</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#whitelist OceanAws#whitelist}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `security_groups`<sup>Required</sup> <a name="security_groups" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.securityGroups"></a>

```python
security_groups: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#security_groups OceanAws#security_groups}.

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#subnet_ids OceanAws#subnet_ids}.

---

##### `associate_ipv6_address`<sup>Optional</sup> <a name="associate_ipv6_address" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.associateIpv6Address"></a>

```python
associate_ipv6_address: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#associate_ipv6_address OceanAws#associate_ipv6_address}.

---

##### `associate_public_ip_address`<sup>Optional</sup> <a name="associate_public_ip_address" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.associatePublicIpAddress"></a>

```python
associate_public_ip_address: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#associate_public_ip_address OceanAws#associate_public_ip_address}.

---

##### `autoscaler`<sup>Optional</sup> <a name="autoscaler" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.autoscaler"></a>

```python
autoscaler: OceanAwsAutoscaler
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler">OceanAwsAutoscaler</a>

autoscaler block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#autoscaler OceanAws#autoscaler}

---

##### `blacklist`<sup>Optional</sup> <a name="blacklist" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.blacklist"></a>

```python
blacklist: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#blacklist OceanAws#blacklist}.

---

##### `block_device_mappings`<sup>Optional</sup> <a name="block_device_mappings" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.blockDeviceMappings"></a>

```python
block_device_mappings: typing.Union[IResolvable, typing.List[OceanAwsBlockDeviceMappings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappings">OceanAwsBlockDeviceMappings</a>]]

block_device_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#block_device_mappings OceanAws#block_device_mappings}

---

##### `cluster_orientation`<sup>Optional</sup> <a name="cluster_orientation" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.clusterOrientation"></a>

```python
cluster_orientation: typing.Union[IResolvable, typing.List[OceanAwsClusterOrientation]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientation">OceanAwsClusterOrientation</a>]]

cluster_orientation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#cluster_orientation OceanAws#cluster_orientation}

---

##### `controller_id`<sup>Optional</sup> <a name="controller_id" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.controllerId"></a>

```python
controller_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#controller_id OceanAws#controller_id}.

---

##### `desired_capacity`<sup>Optional</sup> <a name="desired_capacity" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.desiredCapacity"></a>

```python
desired_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#desired_capacity OceanAws#desired_capacity}.

---

##### `draining_timeout`<sup>Optional</sup> <a name="draining_timeout" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.drainingTimeout"></a>

```python
draining_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#draining_timeout OceanAws#draining_timeout}.

---

##### `ebs_optimized`<sup>Optional</sup> <a name="ebs_optimized" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.ebsOptimized"></a>

```python
ebs_optimized: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#ebs_optimized OceanAws#ebs_optimized}.

---

##### `fallback_to_ondemand`<sup>Optional</sup> <a name="fallback_to_ondemand" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.fallbackToOndemand"></a>

```python
fallback_to_ondemand: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#fallback_to_ondemand OceanAws#fallback_to_ondemand}.

---

##### `filters`<sup>Optional</sup> <a name="filters" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.filters"></a>

```python
filters: OceanAwsFilters
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters">OceanAwsFilters</a>

filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#filters OceanAws#filters}

---

##### `grace_period`<sup>Optional</sup> <a name="grace_period" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.gracePeriod"></a>

```python
grace_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#grace_period OceanAws#grace_period}.

---

##### `iam_instance_profile`<sup>Optional</sup> <a name="iam_instance_profile" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.iamInstanceProfile"></a>

```python
iam_instance_profile: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#iam_instance_profile OceanAws#iam_instance_profile}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#id OceanAws#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `image_id`<sup>Optional</sup> <a name="image_id" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.imageId"></a>

```python
image_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#image_id OceanAws#image_id}.

---

##### `instance_metadata_options`<sup>Optional</sup> <a name="instance_metadata_options" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.instanceMetadataOptions"></a>

```python
instance_metadata_options: OceanAwsInstanceMetadataOptions
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptions">OceanAwsInstanceMetadataOptions</a>

instance_metadata_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#instance_metadata_options OceanAws#instance_metadata_options}

---

##### `key_name`<sup>Optional</sup> <a name="key_name" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.keyName"></a>

```python
key_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#key_name OceanAws#key_name}.

---

##### `load_balancers`<sup>Optional</sup> <a name="load_balancers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.loadBalancers"></a>

```python
load_balancers: typing.Union[IResolvable, typing.List[OceanAwsLoadBalancers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancers">OceanAwsLoadBalancers</a>]]

load_balancers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#load_balancers OceanAws#load_balancers}

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.logging"></a>

```python
logging: OceanAwsLogging
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLogging">OceanAwsLogging</a>

logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#logging OceanAws#logging}

---

##### `max_size`<sup>Optional</sup> <a name="max_size" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.maxSize"></a>

```python
max_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#max_size OceanAws#max_size}.

---

##### `min_size`<sup>Optional</sup> <a name="min_size" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.minSize"></a>

```python
min_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#min_size OceanAws#min_size}.

---

##### `monitoring`<sup>Optional</sup> <a name="monitoring" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.monitoring"></a>

```python
monitoring: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#monitoring OceanAws#monitoring}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#name OceanAws#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#region OceanAws#region}.

---

##### `root_volume_size`<sup>Optional</sup> <a name="root_volume_size" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.rootVolumeSize"></a>

```python
root_volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#root_volume_size OceanAws#root_volume_size}.

---

##### `scheduled_task`<sup>Optional</sup> <a name="scheduled_task" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.scheduledTask"></a>

```python
scheduled_task: typing.Union[IResolvable, typing.List[OceanAwsScheduledTask]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTask">OceanAwsScheduledTask</a>]]

scheduled_task block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#scheduled_task OceanAws#scheduled_task}

---

##### `spot_percentage`<sup>Optional</sup> <a name="spot_percentage" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.spotPercentage"></a>

```python
spot_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#spot_percentage OceanAws#spot_percentage}.

---

##### `spread_nodes_by`<sup>Optional</sup> <a name="spread_nodes_by" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.spreadNodesBy"></a>

```python
spread_nodes_by: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#spread_nodes_by OceanAws#spread_nodes_by}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.tags"></a>

```python
tags: typing.Union[IResolvable, typing.List[OceanAwsTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTags">OceanAwsTags</a>]]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#tags OceanAws#tags}

---

##### `update_policy`<sup>Optional</sup> <a name="update_policy" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.updatePolicy"></a>

```python
update_policy: OceanAwsUpdatePolicy
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicy">OceanAwsUpdatePolicy</a>

update_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#update_policy OceanAws#update_policy}

---

##### `use_as_template_only`<sup>Optional</sup> <a name="use_as_template_only" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.useAsTemplateOnly"></a>

```python
use_as_template_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#use_as_template_only OceanAws#use_as_template_only}.

---

##### `user_data`<sup>Optional</sup> <a name="user_data" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.userData"></a>

```python
user_data: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#user_data OceanAws#user_data}.

---

##### `utilize_commitments`<sup>Optional</sup> <a name="utilize_commitments" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.utilizeCommitments"></a>

```python
utilize_commitments: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#utilize_commitments OceanAws#utilize_commitments}.

---

##### `utilize_reserved_instances`<sup>Optional</sup> <a name="utilize_reserved_instances" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.utilizeReservedInstances"></a>

```python
utilize_reserved_instances: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#utilize_reserved_instances OceanAws#utilize_reserved_instances}.

---

##### `whitelist`<sup>Optional</sup> <a name="whitelist" id="@cdktf/provider-spotinst.oceanAws.OceanAwsConfig.property.whitelist"></a>

```python
whitelist: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#whitelist OceanAws#whitelist}.

---

### OceanAwsFilters <a name="OceanAwsFilters" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_aws

oceanAws.OceanAwsFilters(
  architectures: typing.List[str] = None,
  categories: typing.List[str] = None,
  disk_types: typing.List[str] = None,
  exclude_families: typing.List[str] = None,
  exclude_metal: typing.Union[bool, IResolvable] = None,
  hypervisor: typing.List[str] = None,
  include_families: typing.List[str] = None,
  is_ena_supported: str = None,
  max_gpu: typing.Union[int, float] = None,
  max_memory_gib: typing.Union[int, float] = None,
  max_network_performance: typing.Union[int, float] = None,
  max_vcpu: typing.Union[int, float] = None,
  min_enis: typing.Union[int, float] = None,
  min_gpu: typing.Union[int, float] = None,
  min_memory_gib: typing.Union[int, float] = None,
  min_network_performance: typing.Union[int, float] = None,
  min_vcpu: typing.Union[int, float] = None,
  root_device_types: typing.List[str] = None,
  virtualization_types: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.architectures">architectures</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#architectures OceanAws#architectures}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.categories">categories</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#categories OceanAws#categories}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.diskTypes">disk_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#disk_types OceanAws#disk_types}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.excludeFamilies">exclude_families</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#exclude_families OceanAws#exclude_families}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.excludeMetal">exclude_metal</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#exclude_metal OceanAws#exclude_metal}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.hypervisor">hypervisor</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#hypervisor OceanAws#hypervisor}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.includeFamilies">include_families</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#include_families OceanAws#include_families}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.isEnaSupported">is_ena_supported</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#is_ena_supported OceanAws#is_ena_supported}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.maxGpu">max_gpu</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#max_gpu OceanAws#max_gpu}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.maxMemoryGib">max_memory_gib</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#max_memory_gib OceanAws#max_memory_gib}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.maxNetworkPerformance">max_network_performance</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#max_network_performance OceanAws#max_network_performance}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.maxVcpu">max_vcpu</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#max_vcpu OceanAws#max_vcpu}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.minEnis">min_enis</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#min_enis OceanAws#min_enis}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.minGpu">min_gpu</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#min_gpu OceanAws#min_gpu}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.minMemoryGib">min_memory_gib</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#min_memory_gib OceanAws#min_memory_gib}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.minNetworkPerformance">min_network_performance</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#min_network_performance OceanAws#min_network_performance}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.minVcpu">min_vcpu</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#min_vcpu OceanAws#min_vcpu}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.rootDeviceTypes">root_device_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#root_device_types OceanAws#root_device_types}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.virtualizationTypes">virtualization_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#virtualization_types OceanAws#virtualization_types}. |

---

##### `architectures`<sup>Optional</sup> <a name="architectures" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.architectures"></a>

```python
architectures: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#architectures OceanAws#architectures}.

---

##### `categories`<sup>Optional</sup> <a name="categories" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.categories"></a>

```python
categories: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#categories OceanAws#categories}.

---

##### `disk_types`<sup>Optional</sup> <a name="disk_types" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.diskTypes"></a>

```python
disk_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#disk_types OceanAws#disk_types}.

---

##### `exclude_families`<sup>Optional</sup> <a name="exclude_families" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.excludeFamilies"></a>

```python
exclude_families: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#exclude_families OceanAws#exclude_families}.

---

##### `exclude_metal`<sup>Optional</sup> <a name="exclude_metal" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.excludeMetal"></a>

```python
exclude_metal: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#exclude_metal OceanAws#exclude_metal}.

---

##### `hypervisor`<sup>Optional</sup> <a name="hypervisor" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.hypervisor"></a>

```python
hypervisor: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#hypervisor OceanAws#hypervisor}.

---

##### `include_families`<sup>Optional</sup> <a name="include_families" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.includeFamilies"></a>

```python
include_families: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#include_families OceanAws#include_families}.

---

##### `is_ena_supported`<sup>Optional</sup> <a name="is_ena_supported" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.isEnaSupported"></a>

```python
is_ena_supported: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#is_ena_supported OceanAws#is_ena_supported}.

---

##### `max_gpu`<sup>Optional</sup> <a name="max_gpu" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.maxGpu"></a>

```python
max_gpu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#max_gpu OceanAws#max_gpu}.

---

##### `max_memory_gib`<sup>Optional</sup> <a name="max_memory_gib" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.maxMemoryGib"></a>

```python
max_memory_gib: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#max_memory_gib OceanAws#max_memory_gib}.

---

##### `max_network_performance`<sup>Optional</sup> <a name="max_network_performance" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.maxNetworkPerformance"></a>

```python
max_network_performance: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#max_network_performance OceanAws#max_network_performance}.

---

##### `max_vcpu`<sup>Optional</sup> <a name="max_vcpu" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.maxVcpu"></a>

```python
max_vcpu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#max_vcpu OceanAws#max_vcpu}.

---

##### `min_enis`<sup>Optional</sup> <a name="min_enis" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.minEnis"></a>

```python
min_enis: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#min_enis OceanAws#min_enis}.

---

##### `min_gpu`<sup>Optional</sup> <a name="min_gpu" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.minGpu"></a>

```python
min_gpu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#min_gpu OceanAws#min_gpu}.

---

##### `min_memory_gib`<sup>Optional</sup> <a name="min_memory_gib" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.minMemoryGib"></a>

```python
min_memory_gib: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#min_memory_gib OceanAws#min_memory_gib}.

---

##### `min_network_performance`<sup>Optional</sup> <a name="min_network_performance" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.minNetworkPerformance"></a>

```python
min_network_performance: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#min_network_performance OceanAws#min_network_performance}.

---

##### `min_vcpu`<sup>Optional</sup> <a name="min_vcpu" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.minVcpu"></a>

```python
min_vcpu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#min_vcpu OceanAws#min_vcpu}.

---

##### `root_device_types`<sup>Optional</sup> <a name="root_device_types" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.rootDeviceTypes"></a>

```python
root_device_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#root_device_types OceanAws#root_device_types}.

---

##### `virtualization_types`<sup>Optional</sup> <a name="virtualization_types" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFilters.property.virtualizationTypes"></a>

```python
virtualization_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#virtualization_types OceanAws#virtualization_types}.

---

### OceanAwsInstanceMetadataOptions <a name="OceanAwsInstanceMetadataOptions" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_aws

oceanAws.OceanAwsInstanceMetadataOptions(
  http_tokens: str,
  http_put_response_hop_limit: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptions.property.httpTokens">http_tokens</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#http_tokens OceanAws#http_tokens}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptions.property.httpPutResponseHopLimit">http_put_response_hop_limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#http_put_response_hop_limit OceanAws#http_put_response_hop_limit}. |

---

##### `http_tokens`<sup>Required</sup> <a name="http_tokens" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptions.property.httpTokens"></a>

```python
http_tokens: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#http_tokens OceanAws#http_tokens}.

---

##### `http_put_response_hop_limit`<sup>Optional</sup> <a name="http_put_response_hop_limit" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptions.property.httpPutResponseHopLimit"></a>

```python
http_put_response_hop_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#http_put_response_hop_limit OceanAws#http_put_response_hop_limit}.

---

### OceanAwsLoadBalancers <a name="OceanAwsLoadBalancers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancers.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_aws

oceanAws.OceanAwsLoadBalancers(
  arn: str = None,
  name: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancers.property.arn">arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#arn OceanAws#arn}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancers.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#name OceanAws#name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancers.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#type OceanAws#type}. |

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancers.property.arn"></a>

```python
arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#arn OceanAws#arn}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancers.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#name OceanAws#name}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancers.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#type OceanAws#type}.

---

### OceanAwsLogging <a name="OceanAwsLogging" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLogging"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLogging.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_aws

oceanAws.OceanAwsLogging(
  export: OceanAwsLoggingExport = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLogging.property.export">export</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExport">OceanAwsLoggingExport</a></code> | export block. |

---

##### `export`<sup>Optional</sup> <a name="export" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLogging.property.export"></a>

```python
export: OceanAwsLoggingExport
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExport">OceanAwsLoggingExport</a>

export block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#export OceanAws#export}

---

### OceanAwsLoggingExport <a name="OceanAwsLoggingExport" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExport"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExport.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_aws

oceanAws.OceanAwsLoggingExport(
  s3: typing.Union[IResolvable, typing.List[OceanAwsLoggingExportS3]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExport.property.s3">s3</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3">OceanAwsLoggingExportS3</a>]]</code> | s3 block. |

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExport.property.s3"></a>

```python
s3: typing.Union[IResolvable, typing.List[OceanAwsLoggingExportS3]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3">OceanAwsLoggingExportS3</a>]]

s3 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#s3 OceanAws#s3}

---

### OceanAwsLoggingExportS3 <a name="OceanAwsLoggingExportS3" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_aws

oceanAws.OceanAwsLoggingExportS3(
  id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#id OceanAws#id}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#id OceanAws#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### OceanAwsScheduledTask <a name="OceanAwsScheduledTask" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTask.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_aws

oceanAws.OceanAwsScheduledTask(
  shutdown_hours: OceanAwsScheduledTaskShutdownHours = None,
  tasks: typing.Union[IResolvable, typing.List[OceanAwsScheduledTaskTasks]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTask.property.shutdownHours">shutdown_hours</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHours">OceanAwsScheduledTaskShutdownHours</a></code> | shutdown_hours block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTask.property.tasks">tasks</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasks">OceanAwsScheduledTaskTasks</a>]]</code> | tasks block. |

---

##### `shutdown_hours`<sup>Optional</sup> <a name="shutdown_hours" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTask.property.shutdownHours"></a>

```python
shutdown_hours: OceanAwsScheduledTaskShutdownHours
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHours">OceanAwsScheduledTaskShutdownHours</a>

shutdown_hours block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#shutdown_hours OceanAws#shutdown_hours}

---

##### `tasks`<sup>Optional</sup> <a name="tasks" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTask.property.tasks"></a>

```python
tasks: typing.Union[IResolvable, typing.List[OceanAwsScheduledTaskTasks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasks">OceanAwsScheduledTaskTasks</a>]]

tasks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#tasks OceanAws#tasks}

---

### OceanAwsScheduledTaskShutdownHours <a name="OceanAwsScheduledTaskShutdownHours" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHours"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHours.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_aws

oceanAws.OceanAwsScheduledTaskShutdownHours(
  time_windows: typing.List[str],
  is_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHours.property.timeWindows">time_windows</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#time_windows OceanAws#time_windows}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHours.property.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#is_enabled OceanAws#is_enabled}. |

---

##### `time_windows`<sup>Required</sup> <a name="time_windows" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHours.property.timeWindows"></a>

```python
time_windows: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#time_windows OceanAws#time_windows}.

---

##### `is_enabled`<sup>Optional</sup> <a name="is_enabled" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHours.property.isEnabled"></a>

```python
is_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#is_enabled OceanAws#is_enabled}.

---

### OceanAwsScheduledTaskTasks <a name="OceanAwsScheduledTaskTasks" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasks.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_aws

oceanAws.OceanAwsScheduledTaskTasks(
  cron_expression: str,
  is_enabled: typing.Union[bool, IResolvable],
  task_type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasks.property.cronExpression">cron_expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#cron_expression OceanAws#cron_expression}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasks.property.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#is_enabled OceanAws#is_enabled}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasks.property.taskType">task_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#task_type OceanAws#task_type}. |

---

##### `cron_expression`<sup>Required</sup> <a name="cron_expression" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasks.property.cronExpression"></a>

```python
cron_expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#cron_expression OceanAws#cron_expression}.

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasks.property.isEnabled"></a>

```python
is_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#is_enabled OceanAws#is_enabled}.

---

##### `task_type`<sup>Required</sup> <a name="task_type" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasks.property.taskType"></a>

```python
task_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#task_type OceanAws#task_type}.

---

### OceanAwsTags <a name="OceanAwsTags" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTags.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_aws

oceanAws.OceanAwsTags(
  key: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#key OceanAws#key}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#value OceanAws#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#key OceanAws#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#value OceanAws#value}.

---

### OceanAwsUpdatePolicy <a name="OceanAwsUpdatePolicy" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_aws

oceanAws.OceanAwsUpdatePolicy(
  should_roll: typing.Union[bool, IResolvable],
  auto_apply_tags: typing.Union[bool, IResolvable] = None,
  conditioned_roll: typing.Union[bool, IResolvable] = None,
  roll_config: OceanAwsUpdatePolicyRollConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicy.property.shouldRoll">should_roll</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#should_roll OceanAws#should_roll}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicy.property.autoApplyTags">auto_apply_tags</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#auto_apply_tags OceanAws#auto_apply_tags}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicy.property.conditionedRoll">conditioned_roll</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#conditioned_roll OceanAws#conditioned_roll}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicy.property.rollConfig">roll_config</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfig">OceanAwsUpdatePolicyRollConfig</a></code> | roll_config block. |

---

##### `should_roll`<sup>Required</sup> <a name="should_roll" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicy.property.shouldRoll"></a>

```python
should_roll: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#should_roll OceanAws#should_roll}.

---

##### `auto_apply_tags`<sup>Optional</sup> <a name="auto_apply_tags" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicy.property.autoApplyTags"></a>

```python
auto_apply_tags: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#auto_apply_tags OceanAws#auto_apply_tags}.

---

##### `conditioned_roll`<sup>Optional</sup> <a name="conditioned_roll" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicy.property.conditionedRoll"></a>

```python
conditioned_roll: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#conditioned_roll OceanAws#conditioned_roll}.

---

##### `roll_config`<sup>Optional</sup> <a name="roll_config" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicy.property.rollConfig"></a>

```python
roll_config: OceanAwsUpdatePolicyRollConfig
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfig">OceanAwsUpdatePolicyRollConfig</a>

roll_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#roll_config OceanAws#roll_config}

---

### OceanAwsUpdatePolicyRollConfig <a name="OceanAwsUpdatePolicyRollConfig" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_aws

oceanAws.OceanAwsUpdatePolicyRollConfig(
  batch_size_percentage: typing.Union[int, float],
  batch_min_healthy_percentage: typing.Union[int, float] = None,
  launch_spec_ids: typing.List[str] = None,
  respect_pdb: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfig.property.batchSizePercentage">batch_size_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#batch_size_percentage OceanAws#batch_size_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfig.property.batchMinHealthyPercentage">batch_min_healthy_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#batch_min_healthy_percentage OceanAws#batch_min_healthy_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfig.property.launchSpecIds">launch_spec_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#launch_spec_ids OceanAws#launch_spec_ids}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfig.property.respectPdb">respect_pdb</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#respect_pdb OceanAws#respect_pdb}. |

---

##### `batch_size_percentage`<sup>Required</sup> <a name="batch_size_percentage" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfig.property.batchSizePercentage"></a>

```python
batch_size_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#batch_size_percentage OceanAws#batch_size_percentage}.

---

##### `batch_min_healthy_percentage`<sup>Optional</sup> <a name="batch_min_healthy_percentage" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfig.property.batchMinHealthyPercentage"></a>

```python
batch_min_healthy_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#batch_min_healthy_percentage OceanAws#batch_min_healthy_percentage}.

---

##### `launch_spec_ids`<sup>Optional</sup> <a name="launch_spec_ids" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfig.property.launchSpecIds"></a>

```python
launch_spec_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#launch_spec_ids OceanAws#launch_spec_ids}.

---

##### `respect_pdb`<sup>Optional</sup> <a name="respect_pdb" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfig.property.respectPdb"></a>

```python
respect_pdb: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#respect_pdb OceanAws#respect_pdb}.

---

## Classes <a name="Classes" id="Classes"></a>

### OceanAwsAutoscalerAutoscaleDownOutputReference <a name="OceanAwsAutoscalerAutoscaleDownOutputReference" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_aws

oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.resetEvaluationPeriods">reset_evaluation_periods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.resetMaxScaleDownPercentage">reset_max_scale_down_percentage</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_evaluation_periods` <a name="reset_evaluation_periods" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.resetEvaluationPeriods"></a>

```python
def reset_evaluation_periods() -> None
```

##### `reset_max_scale_down_percentage` <a name="reset_max_scale_down_percentage" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.resetMaxScaleDownPercentage"></a>

```python
def reset_max_scale_down_percentage() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.property.evaluationPeriodsInput">evaluation_periods_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.property.maxScaleDownPercentageInput">max_scale_down_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.property.evaluationPeriods">evaluation_periods</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.property.maxScaleDownPercentage">max_scale_down_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDown">OceanAwsAutoscalerAutoscaleDown</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `evaluation_periods_input`<sup>Optional</sup> <a name="evaluation_periods_input" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.property.evaluationPeriodsInput"></a>

```python
evaluation_periods_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_scale_down_percentage_input`<sup>Optional</sup> <a name="max_scale_down_percentage_input" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.property.maxScaleDownPercentageInput"></a>

```python
max_scale_down_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `evaluation_periods`<sup>Required</sup> <a name="evaluation_periods" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.property.evaluationPeriods"></a>

```python
evaluation_periods: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_scale_down_percentage`<sup>Required</sup> <a name="max_scale_down_percentage" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.property.maxScaleDownPercentage"></a>

```python
max_scale_down_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference.property.internalValue"></a>

```python
internal_value: OceanAwsAutoscalerAutoscaleDown
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDown">OceanAwsAutoscalerAutoscaleDown</a>

---


### OceanAwsAutoscalerAutoscaleHeadroomOutputReference <a name="OceanAwsAutoscalerAutoscaleHeadroomOutputReference" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_aws

oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.resetCpuPerUnit">reset_cpu_per_unit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.resetGpuPerUnit">reset_gpu_per_unit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.resetMemoryPerUnit">reset_memory_per_unit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.resetNumOfUnits">reset_num_of_units</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cpu_per_unit` <a name="reset_cpu_per_unit" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.resetCpuPerUnit"></a>

```python
def reset_cpu_per_unit() -> None
```

##### `reset_gpu_per_unit` <a name="reset_gpu_per_unit" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.resetGpuPerUnit"></a>

```python
def reset_gpu_per_unit() -> None
```

##### `reset_memory_per_unit` <a name="reset_memory_per_unit" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.resetMemoryPerUnit"></a>

```python
def reset_memory_per_unit() -> None
```

##### `reset_num_of_units` <a name="reset_num_of_units" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.resetNumOfUnits"></a>

```python
def reset_num_of_units() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.cpuPerUnitInput">cpu_per_unit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.gpuPerUnitInput">gpu_per_unit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.memoryPerUnitInput">memory_per_unit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.numOfUnitsInput">num_of_units_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.cpuPerUnit">cpu_per_unit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.gpuPerUnit">gpu_per_unit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.memoryPerUnit">memory_per_unit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.numOfUnits">num_of_units</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroom">OceanAwsAutoscalerAutoscaleHeadroom</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cpu_per_unit_input`<sup>Optional</sup> <a name="cpu_per_unit_input" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.cpuPerUnitInput"></a>

```python
cpu_per_unit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `gpu_per_unit_input`<sup>Optional</sup> <a name="gpu_per_unit_input" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.gpuPerUnitInput"></a>

```python
gpu_per_unit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_per_unit_input`<sup>Optional</sup> <a name="memory_per_unit_input" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.memoryPerUnitInput"></a>

```python
memory_per_unit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `num_of_units_input`<sup>Optional</sup> <a name="num_of_units_input" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.numOfUnitsInput"></a>

```python
num_of_units_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_per_unit`<sup>Required</sup> <a name="cpu_per_unit" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.cpuPerUnit"></a>

```python
cpu_per_unit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `gpu_per_unit`<sup>Required</sup> <a name="gpu_per_unit" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.gpuPerUnit"></a>

```python
gpu_per_unit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_per_unit`<sup>Required</sup> <a name="memory_per_unit" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.memoryPerUnit"></a>

```python
memory_per_unit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `num_of_units`<sup>Required</sup> <a name="num_of_units" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.numOfUnits"></a>

```python
num_of_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference.property.internalValue"></a>

```python
internal_value: OceanAwsAutoscalerAutoscaleHeadroom
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroom">OceanAwsAutoscalerAutoscaleHeadroom</a>

---


### OceanAwsAutoscalerOutputReference <a name="OceanAwsAutoscalerOutputReference" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_aws

oceanAws.OceanAwsAutoscalerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.putAutoscaleDown">put_autoscale_down</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.putAutoscaleHeadroom">put_autoscale_headroom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.putResourceLimits">put_resource_limits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.resetAutoHeadroomPercentage">reset_auto_headroom_percentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.resetAutoscaleCooldown">reset_autoscale_cooldown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.resetAutoscaleDown">reset_autoscale_down</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.resetAutoscaleHeadroom">reset_autoscale_headroom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.resetAutoscaleIsAutoConfig">reset_autoscale_is_auto_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.resetAutoscaleIsEnabled">reset_autoscale_is_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.resetEnableAutomaticAndManualHeadroom">reset_enable_automatic_and_manual_headroom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.resetExtendedResourceDefinitions">reset_extended_resource_definitions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.resetResourceLimits">reset_resource_limits</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_autoscale_down` <a name="put_autoscale_down" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.putAutoscaleDown"></a>

```python
def put_autoscale_down(
  evaluation_periods: typing.Union[int, float] = None,
  max_scale_down_percentage: typing.Union[int, float] = None
) -> None
```

###### `evaluation_periods`<sup>Optional</sup> <a name="evaluation_periods" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.putAutoscaleDown.parameter.evaluationPeriods"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#evaluation_periods OceanAws#evaluation_periods}.

---

###### `max_scale_down_percentage`<sup>Optional</sup> <a name="max_scale_down_percentage" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.putAutoscaleDown.parameter.maxScaleDownPercentage"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#max_scale_down_percentage OceanAws#max_scale_down_percentage}.

---

##### `put_autoscale_headroom` <a name="put_autoscale_headroom" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.putAutoscaleHeadroom"></a>

```python
def put_autoscale_headroom(
  cpu_per_unit: typing.Union[int, float] = None,
  gpu_per_unit: typing.Union[int, float] = None,
  memory_per_unit: typing.Union[int, float] = None,
  num_of_units: typing.Union[int, float] = None
) -> None
```

###### `cpu_per_unit`<sup>Optional</sup> <a name="cpu_per_unit" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.putAutoscaleHeadroom.parameter.cpuPerUnit"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#cpu_per_unit OceanAws#cpu_per_unit}.

---

###### `gpu_per_unit`<sup>Optional</sup> <a name="gpu_per_unit" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.putAutoscaleHeadroom.parameter.gpuPerUnit"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#gpu_per_unit OceanAws#gpu_per_unit}.

---

###### `memory_per_unit`<sup>Optional</sup> <a name="memory_per_unit" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.putAutoscaleHeadroom.parameter.memoryPerUnit"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#memory_per_unit OceanAws#memory_per_unit}.

---

###### `num_of_units`<sup>Optional</sup> <a name="num_of_units" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.putAutoscaleHeadroom.parameter.numOfUnits"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#num_of_units OceanAws#num_of_units}.

---

##### `put_resource_limits` <a name="put_resource_limits" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.putResourceLimits"></a>

```python
def put_resource_limits(
  max_memory_gib: typing.Union[int, float] = None,
  max_vcpu: typing.Union[int, float] = None
) -> None
```

###### `max_memory_gib`<sup>Optional</sup> <a name="max_memory_gib" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.putResourceLimits.parameter.maxMemoryGib"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#max_memory_gib OceanAws#max_memory_gib}.

---

###### `max_vcpu`<sup>Optional</sup> <a name="max_vcpu" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.putResourceLimits.parameter.maxVcpu"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#max_vcpu OceanAws#max_vcpu}.

---

##### `reset_auto_headroom_percentage` <a name="reset_auto_headroom_percentage" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.resetAutoHeadroomPercentage"></a>

```python
def reset_auto_headroom_percentage() -> None
```

##### `reset_autoscale_cooldown` <a name="reset_autoscale_cooldown" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.resetAutoscaleCooldown"></a>

```python
def reset_autoscale_cooldown() -> None
```

##### `reset_autoscale_down` <a name="reset_autoscale_down" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.resetAutoscaleDown"></a>

```python
def reset_autoscale_down() -> None
```

##### `reset_autoscale_headroom` <a name="reset_autoscale_headroom" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.resetAutoscaleHeadroom"></a>

```python
def reset_autoscale_headroom() -> None
```

##### `reset_autoscale_is_auto_config` <a name="reset_autoscale_is_auto_config" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.resetAutoscaleIsAutoConfig"></a>

```python
def reset_autoscale_is_auto_config() -> None
```

##### `reset_autoscale_is_enabled` <a name="reset_autoscale_is_enabled" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.resetAutoscaleIsEnabled"></a>

```python
def reset_autoscale_is_enabled() -> None
```

##### `reset_enable_automatic_and_manual_headroom` <a name="reset_enable_automatic_and_manual_headroom" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.resetEnableAutomaticAndManualHeadroom"></a>

```python
def reset_enable_automatic_and_manual_headroom() -> None
```

##### `reset_extended_resource_definitions` <a name="reset_extended_resource_definitions" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.resetExtendedResourceDefinitions"></a>

```python
def reset_extended_resource_definitions() -> None
```

##### `reset_resource_limits` <a name="reset_resource_limits" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.resetResourceLimits"></a>

```python
def reset_resource_limits() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoscaleDown">autoscale_down</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference">OceanAwsAutoscalerAutoscaleDownOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoscaleHeadroom">autoscale_headroom</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference">OceanAwsAutoscalerAutoscaleHeadroomOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.resourceLimits">resource_limits</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference">OceanAwsAutoscalerResourceLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoHeadroomPercentageInput">auto_headroom_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoscaleCooldownInput">autoscale_cooldown_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoscaleDownInput">autoscale_down_input</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDown">OceanAwsAutoscalerAutoscaleDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoscaleHeadroomInput">autoscale_headroom_input</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroom">OceanAwsAutoscalerAutoscaleHeadroom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoscaleIsAutoConfigInput">autoscale_is_auto_config_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoscaleIsEnabledInput">autoscale_is_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.enableAutomaticAndManualHeadroomInput">enable_automatic_and_manual_headroom_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.extendedResourceDefinitionsInput">extended_resource_definitions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.resourceLimitsInput">resource_limits_input</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimits">OceanAwsAutoscalerResourceLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoHeadroomPercentage">auto_headroom_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoscaleCooldown">autoscale_cooldown</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoscaleIsAutoConfig">autoscale_is_auto_config</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoscaleIsEnabled">autoscale_is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.enableAutomaticAndManualHeadroom">enable_automatic_and_manual_headroom</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.extendedResourceDefinitions">extended_resource_definitions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler">OceanAwsAutoscaler</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `autoscale_down`<sup>Required</sup> <a name="autoscale_down" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoscaleDown"></a>

```python
autoscale_down: OceanAwsAutoscalerAutoscaleDownOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDownOutputReference">OceanAwsAutoscalerAutoscaleDownOutputReference</a>

---

##### `autoscale_headroom`<sup>Required</sup> <a name="autoscale_headroom" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoscaleHeadroom"></a>

```python
autoscale_headroom: OceanAwsAutoscalerAutoscaleHeadroomOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroomOutputReference">OceanAwsAutoscalerAutoscaleHeadroomOutputReference</a>

---

##### `resource_limits`<sup>Required</sup> <a name="resource_limits" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.resourceLimits"></a>

```python
resource_limits: OceanAwsAutoscalerResourceLimitsOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference">OceanAwsAutoscalerResourceLimitsOutputReference</a>

---

##### `auto_headroom_percentage_input`<sup>Optional</sup> <a name="auto_headroom_percentage_input" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoHeadroomPercentageInput"></a>

```python
auto_headroom_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `autoscale_cooldown_input`<sup>Optional</sup> <a name="autoscale_cooldown_input" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoscaleCooldownInput"></a>

```python
autoscale_cooldown_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `autoscale_down_input`<sup>Optional</sup> <a name="autoscale_down_input" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoscaleDownInput"></a>

```python
autoscale_down_input: OceanAwsAutoscalerAutoscaleDown
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleDown">OceanAwsAutoscalerAutoscaleDown</a>

---

##### `autoscale_headroom_input`<sup>Optional</sup> <a name="autoscale_headroom_input" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoscaleHeadroomInput"></a>

```python
autoscale_headroom_input: OceanAwsAutoscalerAutoscaleHeadroom
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerAutoscaleHeadroom">OceanAwsAutoscalerAutoscaleHeadroom</a>

---

##### `autoscale_is_auto_config_input`<sup>Optional</sup> <a name="autoscale_is_auto_config_input" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoscaleIsAutoConfigInput"></a>

```python
autoscale_is_auto_config_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `autoscale_is_enabled_input`<sup>Optional</sup> <a name="autoscale_is_enabled_input" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoscaleIsEnabledInput"></a>

```python
autoscale_is_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_automatic_and_manual_headroom_input`<sup>Optional</sup> <a name="enable_automatic_and_manual_headroom_input" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.enableAutomaticAndManualHeadroomInput"></a>

```python
enable_automatic_and_manual_headroom_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `extended_resource_definitions_input`<sup>Optional</sup> <a name="extended_resource_definitions_input" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.extendedResourceDefinitionsInput"></a>

```python
extended_resource_definitions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_limits_input`<sup>Optional</sup> <a name="resource_limits_input" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.resourceLimitsInput"></a>

```python
resource_limits_input: OceanAwsAutoscalerResourceLimits
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimits">OceanAwsAutoscalerResourceLimits</a>

---

##### `auto_headroom_percentage`<sup>Required</sup> <a name="auto_headroom_percentage" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoHeadroomPercentage"></a>

```python
auto_headroom_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `autoscale_cooldown`<sup>Required</sup> <a name="autoscale_cooldown" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoscaleCooldown"></a>

```python
autoscale_cooldown: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `autoscale_is_auto_config`<sup>Required</sup> <a name="autoscale_is_auto_config" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoscaleIsAutoConfig"></a>

```python
autoscale_is_auto_config: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `autoscale_is_enabled`<sup>Required</sup> <a name="autoscale_is_enabled" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.autoscaleIsEnabled"></a>

```python
autoscale_is_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_automatic_and_manual_headroom`<sup>Required</sup> <a name="enable_automatic_and_manual_headroom" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.enableAutomaticAndManualHeadroom"></a>

```python
enable_automatic_and_manual_headroom: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `extended_resource_definitions`<sup>Required</sup> <a name="extended_resource_definitions" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.extendedResourceDefinitions"></a>

```python
extended_resource_definitions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerOutputReference.property.internalValue"></a>

```python
internal_value: OceanAwsAutoscaler
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscaler">OceanAwsAutoscaler</a>

---


### OceanAwsAutoscalerResourceLimitsOutputReference <a name="OceanAwsAutoscalerResourceLimitsOutputReference" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_aws

oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.resetMaxMemoryGib">reset_max_memory_gib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.resetMaxVcpu">reset_max_vcpu</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_memory_gib` <a name="reset_max_memory_gib" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.resetMaxMemoryGib"></a>

```python
def reset_max_memory_gib() -> None
```

##### `reset_max_vcpu` <a name="reset_max_vcpu" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.resetMaxVcpu"></a>

```python
def reset_max_vcpu() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.property.maxMemoryGibInput">max_memory_gib_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.property.maxVcpuInput">max_vcpu_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.property.maxMemoryGib">max_memory_gib</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.property.maxVcpu">max_vcpu</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimits">OceanAwsAutoscalerResourceLimits</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_memory_gib_input`<sup>Optional</sup> <a name="max_memory_gib_input" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.property.maxMemoryGibInput"></a>

```python
max_memory_gib_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_vcpu_input`<sup>Optional</sup> <a name="max_vcpu_input" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.property.maxVcpuInput"></a>

```python
max_vcpu_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_memory_gib`<sup>Required</sup> <a name="max_memory_gib" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.property.maxMemoryGib"></a>

```python
max_memory_gib: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_vcpu`<sup>Required</sup> <a name="max_vcpu" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.property.maxVcpu"></a>

```python
max_vcpu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimitsOutputReference.property.internalValue"></a>

```python
internal_value: OceanAwsAutoscalerResourceLimits
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsAutoscalerResourceLimits">OceanAwsAutoscalerResourceLimits</a>

---


### OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference <a name="OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_aws

oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.baseSizeInput">base_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.resourceInput">resource_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.sizePerResourceUnitInput">size_per_resource_unit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.baseSize">base_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.resource">resource</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.sizePerResourceUnit">size_per_resource_unit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize">OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `base_size_input`<sup>Optional</sup> <a name="base_size_input" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.baseSizeInput"></a>

```python
base_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_input`<sup>Optional</sup> <a name="resource_input" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.resourceInput"></a>

```python
resource_input: str
```

- *Type:* str

---

##### `size_per_resource_unit_input`<sup>Optional</sup> <a name="size_per_resource_unit_input" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.sizePerResourceUnitInput"></a>

```python
size_per_resource_unit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `base_size`<sup>Required</sup> <a name="base_size" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.baseSize"></a>

```python
base_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.resource"></a>

```python
resource: str
```

- *Type:* str

---

##### `size_per_resource_unit`<sup>Required</sup> <a name="size_per_resource_unit" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.sizePerResourceUnit"></a>

```python
size_per_resource_unit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference.property.internalValue"></a>

```python
internal_value: OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize">OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize</a>

---


### OceanAwsBlockDeviceMappingsEbsOutputReference <a name="OceanAwsBlockDeviceMappingsEbsOutputReference" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_aws

oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.putDynamicVolumeSize">put_dynamic_volume_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.resetDeleteOnTermination">reset_delete_on_termination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.resetDynamicVolumeSize">reset_dynamic_volume_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.resetEncrypted">reset_encrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.resetIops">reset_iops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.resetSnapshotId">reset_snapshot_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.resetThroughput">reset_throughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.resetVolumeSize">reset_volume_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.resetVolumeType">reset_volume_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dynamic_volume_size` <a name="put_dynamic_volume_size" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.putDynamicVolumeSize"></a>

```python
def put_dynamic_volume_size(
  base_size: typing.Union[int, float],
  resource: str,
  size_per_resource_unit: typing.Union[int, float]
) -> None
```

###### `base_size`<sup>Required</sup> <a name="base_size" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.putDynamicVolumeSize.parameter.baseSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#base_size OceanAws#base_size}.

---

###### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.putDynamicVolumeSize.parameter.resource"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#resource OceanAws#resource}.

---

###### `size_per_resource_unit`<sup>Required</sup> <a name="size_per_resource_unit" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.putDynamicVolumeSize.parameter.sizePerResourceUnit"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#size_per_resource_unit OceanAws#size_per_resource_unit}.

---

##### `reset_delete_on_termination` <a name="reset_delete_on_termination" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.resetDeleteOnTermination"></a>

```python
def reset_delete_on_termination() -> None
```

##### `reset_dynamic_volume_size` <a name="reset_dynamic_volume_size" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.resetDynamicVolumeSize"></a>

```python
def reset_dynamic_volume_size() -> None
```

##### `reset_encrypted` <a name="reset_encrypted" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.resetEncrypted"></a>

```python
def reset_encrypted() -> None
```

##### `reset_iops` <a name="reset_iops" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.resetIops"></a>

```python
def reset_iops() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_snapshot_id` <a name="reset_snapshot_id" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.resetSnapshotId"></a>

```python
def reset_snapshot_id() -> None
```

##### `reset_throughput` <a name="reset_throughput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.resetThroughput"></a>

```python
def reset_throughput() -> None
```

##### `reset_volume_size` <a name="reset_volume_size" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.resetVolumeSize"></a>

```python
def reset_volume_size() -> None
```

##### `reset_volume_type` <a name="reset_volume_type" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.resetVolumeType"></a>

```python
def reset_volume_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.dynamicVolumeSize">dynamic_volume_size</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference">OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.deleteOnTerminationInput">delete_on_termination_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.dynamicVolumeSizeInput">dynamic_volume_size_input</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize">OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.encryptedInput">encrypted_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.iopsInput">iops_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.snapshotIdInput">snapshot_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.throughputInput">throughput_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.volumeSizeInput">volume_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.volumeTypeInput">volume_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.deleteOnTermination">delete_on_termination</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.encrypted">encrypted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.snapshotId">snapshot_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.throughput">throughput</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.volumeSize">volume_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.volumeType">volume_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbs">OceanAwsBlockDeviceMappingsEbs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dynamic_volume_size`<sup>Required</sup> <a name="dynamic_volume_size" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.dynamicVolumeSize"></a>

```python
dynamic_volume_size: OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference">OceanAwsBlockDeviceMappingsEbsDynamicVolumeSizeOutputReference</a>

---

##### `delete_on_termination_input`<sup>Optional</sup> <a name="delete_on_termination_input" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.deleteOnTerminationInput"></a>

```python
delete_on_termination_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `dynamic_volume_size_input`<sup>Optional</sup> <a name="dynamic_volume_size_input" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.dynamicVolumeSizeInput"></a>

```python
dynamic_volume_size_input: OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize">OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize</a>

---

##### `encrypted_input`<sup>Optional</sup> <a name="encrypted_input" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.encryptedInput"></a>

```python
encrypted_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `iops_input`<sup>Optional</sup> <a name="iops_input" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.iopsInput"></a>

```python
iops_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `snapshot_id_input`<sup>Optional</sup> <a name="snapshot_id_input" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.snapshotIdInput"></a>

```python
snapshot_id_input: str
```

- *Type:* str

---

##### `throughput_input`<sup>Optional</sup> <a name="throughput_input" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.throughputInput"></a>

```python
throughput_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_size_input`<sup>Optional</sup> <a name="volume_size_input" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.volumeSizeInput"></a>

```python
volume_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_type_input`<sup>Optional</sup> <a name="volume_type_input" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.volumeTypeInput"></a>

```python
volume_type_input: str
```

- *Type:* str

---

##### `delete_on_termination`<sup>Required</sup> <a name="delete_on_termination" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.deleteOnTermination"></a>

```python
delete_on_termination: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.encrypted"></a>

```python
encrypted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `snapshot_id`<sup>Required</sup> <a name="snapshot_id" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.snapshotId"></a>

```python
snapshot_id: str
```

- *Type:* str

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.throughput"></a>

```python
throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_size`<sup>Required</sup> <a name="volume_size" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.volumeSize"></a>

```python
volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_type`<sup>Required</sup> <a name="volume_type" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference.property.internalValue"></a>

```python
internal_value: OceanAwsBlockDeviceMappingsEbs
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbs">OceanAwsBlockDeviceMappingsEbs</a>

---


### OceanAwsBlockDeviceMappingsList <a name="OceanAwsBlockDeviceMappingsList" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_aws

oceanAws.OceanAwsBlockDeviceMappingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OceanAwsBlockDeviceMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappings">OceanAwsBlockDeviceMappings</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OceanAwsBlockDeviceMappings]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappings">OceanAwsBlockDeviceMappings</a>]]

---


### OceanAwsBlockDeviceMappingsOutputReference <a name="OceanAwsBlockDeviceMappingsOutputReference" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_aws

oceanAws.OceanAwsBlockDeviceMappingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.putEbs">put_ebs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.resetDeviceName">reset_device_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.resetEbs">reset_ebs</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ebs` <a name="put_ebs" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.putEbs"></a>

```python
def put_ebs(
  delete_on_termination: typing.Union[bool, IResolvable] = None,
  dynamic_volume_size: OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize = None,
  encrypted: typing.Union[bool, IResolvable] = None,
  iops: typing.Union[int, float] = None,
  kms_key_id: str = None,
  snapshot_id: str = None,
  throughput: typing.Union[int, float] = None,
  volume_size: typing.Union[int, float] = None,
  volume_type: str = None
) -> None
```

###### `delete_on_termination`<sup>Optional</sup> <a name="delete_on_termination" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.putEbs.parameter.deleteOnTermination"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#delete_on_termination OceanAws#delete_on_termination}.

---

###### `dynamic_volume_size`<sup>Optional</sup> <a name="dynamic_volume_size" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.putEbs.parameter.dynamicVolumeSize"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize">OceanAwsBlockDeviceMappingsEbsDynamicVolumeSize</a>

dynamic_volume_size block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#dynamic_volume_size OceanAws#dynamic_volume_size}

---

###### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.putEbs.parameter.encrypted"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#encrypted OceanAws#encrypted}.

---

###### `iops`<sup>Optional</sup> <a name="iops" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.putEbs.parameter.iops"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#iops OceanAws#iops}.

---

###### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.putEbs.parameter.kmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#kms_key_id OceanAws#kms_key_id}.

---

###### `snapshot_id`<sup>Optional</sup> <a name="snapshot_id" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.putEbs.parameter.snapshotId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#snapshot_id OceanAws#snapshot_id}.

---

###### `throughput`<sup>Optional</sup> <a name="throughput" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.putEbs.parameter.throughput"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#throughput OceanAws#throughput}.

---

###### `volume_size`<sup>Optional</sup> <a name="volume_size" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.putEbs.parameter.volumeSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#volume_size OceanAws#volume_size}.

---

###### `volume_type`<sup>Optional</sup> <a name="volume_type" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.putEbs.parameter.volumeType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#volume_type OceanAws#volume_type}.

---

##### `reset_device_name` <a name="reset_device_name" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.resetDeviceName"></a>

```python
def reset_device_name() -> None
```

##### `reset_ebs` <a name="reset_ebs" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.resetEbs"></a>

```python
def reset_ebs() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.property.ebs">ebs</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference">OceanAwsBlockDeviceMappingsEbsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.property.deviceNameInput">device_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.property.ebsInput">ebs_input</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbs">OceanAwsBlockDeviceMappingsEbs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.property.deviceName">device_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappings">OceanAwsBlockDeviceMappings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ebs`<sup>Required</sup> <a name="ebs" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.property.ebs"></a>

```python
ebs: OceanAwsBlockDeviceMappingsEbsOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbsOutputReference">OceanAwsBlockDeviceMappingsEbsOutputReference</a>

---

##### `device_name_input`<sup>Optional</sup> <a name="device_name_input" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.property.deviceNameInput"></a>

```python
device_name_input: str
```

- *Type:* str

---

##### `ebs_input`<sup>Optional</sup> <a name="ebs_input" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.property.ebsInput"></a>

```python
ebs_input: OceanAwsBlockDeviceMappingsEbs
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsEbs">OceanAwsBlockDeviceMappingsEbs</a>

---

##### `device_name`<sup>Required</sup> <a name="device_name" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.property.deviceName"></a>

```python
device_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappingsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OceanAwsBlockDeviceMappings]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsBlockDeviceMappings">OceanAwsBlockDeviceMappings</a>]

---


### OceanAwsClusterOrientationList <a name="OceanAwsClusterOrientationList" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_aws

oceanAws.OceanAwsClusterOrientationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OceanAwsClusterOrientationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientation">OceanAwsClusterOrientation</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OceanAwsClusterOrientation]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientation">OceanAwsClusterOrientation</a>]]

---


### OceanAwsClusterOrientationOutputReference <a name="OceanAwsClusterOrientationOutputReference" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_aws

oceanAws.OceanAwsClusterOrientationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.resetAvailabilityVsCost">reset_availability_vs_cost</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_availability_vs_cost` <a name="reset_availability_vs_cost" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.resetAvailabilityVsCost"></a>

```python
def reset_availability_vs_cost() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.property.availabilityVsCostInput">availability_vs_cost_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.property.availabilityVsCost">availability_vs_cost</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientation">OceanAwsClusterOrientation</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_vs_cost_input`<sup>Optional</sup> <a name="availability_vs_cost_input" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.property.availabilityVsCostInput"></a>

```python
availability_vs_cost_input: str
```

- *Type:* str

---

##### `availability_vs_cost`<sup>Required</sup> <a name="availability_vs_cost" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.property.availabilityVsCost"></a>

```python
availability_vs_cost: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OceanAwsClusterOrientation]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsClusterOrientation">OceanAwsClusterOrientation</a>]

---


### OceanAwsFiltersOutputReference <a name="OceanAwsFiltersOutputReference" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_aws

oceanAws.OceanAwsFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetArchitectures">reset_architectures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetCategories">reset_categories</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetDiskTypes">reset_disk_types</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetExcludeFamilies">reset_exclude_families</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetExcludeMetal">reset_exclude_metal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetHypervisor">reset_hypervisor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetIncludeFamilies">reset_include_families</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetIsEnaSupported">reset_is_ena_supported</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetMaxGpu">reset_max_gpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetMaxMemoryGib">reset_max_memory_gib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetMaxNetworkPerformance">reset_max_network_performance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetMaxVcpu">reset_max_vcpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetMinEnis">reset_min_enis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetMinGpu">reset_min_gpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetMinMemoryGib">reset_min_memory_gib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetMinNetworkPerformance">reset_min_network_performance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetMinVcpu">reset_min_vcpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetRootDeviceTypes">reset_root_device_types</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetVirtualizationTypes">reset_virtualization_types</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_architectures` <a name="reset_architectures" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetArchitectures"></a>

```python
def reset_architectures() -> None
```

##### `reset_categories` <a name="reset_categories" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetCategories"></a>

```python
def reset_categories() -> None
```

##### `reset_disk_types` <a name="reset_disk_types" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetDiskTypes"></a>

```python
def reset_disk_types() -> None
```

##### `reset_exclude_families` <a name="reset_exclude_families" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetExcludeFamilies"></a>

```python
def reset_exclude_families() -> None
```

##### `reset_exclude_metal` <a name="reset_exclude_metal" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetExcludeMetal"></a>

```python
def reset_exclude_metal() -> None
```

##### `reset_hypervisor` <a name="reset_hypervisor" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetHypervisor"></a>

```python
def reset_hypervisor() -> None
```

##### `reset_include_families` <a name="reset_include_families" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetIncludeFamilies"></a>

```python
def reset_include_families() -> None
```

##### `reset_is_ena_supported` <a name="reset_is_ena_supported" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetIsEnaSupported"></a>

```python
def reset_is_ena_supported() -> None
```

##### `reset_max_gpu` <a name="reset_max_gpu" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetMaxGpu"></a>

```python
def reset_max_gpu() -> None
```

##### `reset_max_memory_gib` <a name="reset_max_memory_gib" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetMaxMemoryGib"></a>

```python
def reset_max_memory_gib() -> None
```

##### `reset_max_network_performance` <a name="reset_max_network_performance" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetMaxNetworkPerformance"></a>

```python
def reset_max_network_performance() -> None
```

##### `reset_max_vcpu` <a name="reset_max_vcpu" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetMaxVcpu"></a>

```python
def reset_max_vcpu() -> None
```

##### `reset_min_enis` <a name="reset_min_enis" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetMinEnis"></a>

```python
def reset_min_enis() -> None
```

##### `reset_min_gpu` <a name="reset_min_gpu" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetMinGpu"></a>

```python
def reset_min_gpu() -> None
```

##### `reset_min_memory_gib` <a name="reset_min_memory_gib" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetMinMemoryGib"></a>

```python
def reset_min_memory_gib() -> None
```

##### `reset_min_network_performance` <a name="reset_min_network_performance" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetMinNetworkPerformance"></a>

```python
def reset_min_network_performance() -> None
```

##### `reset_min_vcpu` <a name="reset_min_vcpu" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetMinVcpu"></a>

```python
def reset_min_vcpu() -> None
```

##### `reset_root_device_types` <a name="reset_root_device_types" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetRootDeviceTypes"></a>

```python
def reset_root_device_types() -> None
```

##### `reset_virtualization_types` <a name="reset_virtualization_types" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.resetVirtualizationTypes"></a>

```python
def reset_virtualization_types() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.architecturesInput">architectures_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.categoriesInput">categories_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.diskTypesInput">disk_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.excludeFamiliesInput">exclude_families_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.excludeMetalInput">exclude_metal_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.hypervisorInput">hypervisor_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.includeFamiliesInput">include_families_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.isEnaSupportedInput">is_ena_supported_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.maxGpuInput">max_gpu_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.maxMemoryGibInput">max_memory_gib_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.maxNetworkPerformanceInput">max_network_performance_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.maxVcpuInput">max_vcpu_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.minEnisInput">min_enis_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.minGpuInput">min_gpu_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.minMemoryGibInput">min_memory_gib_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.minNetworkPerformanceInput">min_network_performance_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.minVcpuInput">min_vcpu_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.rootDeviceTypesInput">root_device_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.virtualizationTypesInput">virtualization_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.architectures">architectures</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.categories">categories</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.diskTypes">disk_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.excludeFamilies">exclude_families</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.excludeMetal">exclude_metal</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.hypervisor">hypervisor</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.includeFamilies">include_families</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.isEnaSupported">is_ena_supported</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.maxGpu">max_gpu</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.maxMemoryGib">max_memory_gib</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.maxNetworkPerformance">max_network_performance</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.maxVcpu">max_vcpu</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.minEnis">min_enis</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.minGpu">min_gpu</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.minMemoryGib">min_memory_gib</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.minNetworkPerformance">min_network_performance</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.minVcpu">min_vcpu</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.rootDeviceTypes">root_device_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.virtualizationTypes">virtualization_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters">OceanAwsFilters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `architectures_input`<sup>Optional</sup> <a name="architectures_input" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.architecturesInput"></a>

```python
architectures_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `categories_input`<sup>Optional</sup> <a name="categories_input" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.categoriesInput"></a>

```python
categories_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `disk_types_input`<sup>Optional</sup> <a name="disk_types_input" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.diskTypesInput"></a>

```python
disk_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exclude_families_input`<sup>Optional</sup> <a name="exclude_families_input" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.excludeFamiliesInput"></a>

```python
exclude_families_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exclude_metal_input`<sup>Optional</sup> <a name="exclude_metal_input" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.excludeMetalInput"></a>

```python
exclude_metal_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hypervisor_input`<sup>Optional</sup> <a name="hypervisor_input" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.hypervisorInput"></a>

```python
hypervisor_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_families_input`<sup>Optional</sup> <a name="include_families_input" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.includeFamiliesInput"></a>

```python
include_families_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `is_ena_supported_input`<sup>Optional</sup> <a name="is_ena_supported_input" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.isEnaSupportedInput"></a>

```python
is_ena_supported_input: str
```

- *Type:* str

---

##### `max_gpu_input`<sup>Optional</sup> <a name="max_gpu_input" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.maxGpuInput"></a>

```python
max_gpu_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_memory_gib_input`<sup>Optional</sup> <a name="max_memory_gib_input" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.maxMemoryGibInput"></a>

```python
max_memory_gib_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_network_performance_input`<sup>Optional</sup> <a name="max_network_performance_input" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.maxNetworkPerformanceInput"></a>

```python
max_network_performance_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_vcpu_input`<sup>Optional</sup> <a name="max_vcpu_input" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.maxVcpuInput"></a>

```python
max_vcpu_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_enis_input`<sup>Optional</sup> <a name="min_enis_input" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.minEnisInput"></a>

```python
min_enis_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_gpu_input`<sup>Optional</sup> <a name="min_gpu_input" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.minGpuInput"></a>

```python
min_gpu_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_memory_gib_input`<sup>Optional</sup> <a name="min_memory_gib_input" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.minMemoryGibInput"></a>

```python
min_memory_gib_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_network_performance_input`<sup>Optional</sup> <a name="min_network_performance_input" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.minNetworkPerformanceInput"></a>

```python
min_network_performance_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_vcpu_input`<sup>Optional</sup> <a name="min_vcpu_input" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.minVcpuInput"></a>

```python
min_vcpu_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `root_device_types_input`<sup>Optional</sup> <a name="root_device_types_input" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.rootDeviceTypesInput"></a>

```python
root_device_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `virtualization_types_input`<sup>Optional</sup> <a name="virtualization_types_input" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.virtualizationTypesInput"></a>

```python
virtualization_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `architectures`<sup>Required</sup> <a name="architectures" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.architectures"></a>

```python
architectures: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `categories`<sup>Required</sup> <a name="categories" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.categories"></a>

```python
categories: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `disk_types`<sup>Required</sup> <a name="disk_types" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.diskTypes"></a>

```python
disk_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exclude_families`<sup>Required</sup> <a name="exclude_families" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.excludeFamilies"></a>

```python
exclude_families: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exclude_metal`<sup>Required</sup> <a name="exclude_metal" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.excludeMetal"></a>

```python
exclude_metal: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hypervisor`<sup>Required</sup> <a name="hypervisor" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.hypervisor"></a>

```python
hypervisor: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_families`<sup>Required</sup> <a name="include_families" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.includeFamilies"></a>

```python
include_families: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `is_ena_supported`<sup>Required</sup> <a name="is_ena_supported" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.isEnaSupported"></a>

```python
is_ena_supported: str
```

- *Type:* str

---

##### `max_gpu`<sup>Required</sup> <a name="max_gpu" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.maxGpu"></a>

```python
max_gpu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_memory_gib`<sup>Required</sup> <a name="max_memory_gib" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.maxMemoryGib"></a>

```python
max_memory_gib: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_network_performance`<sup>Required</sup> <a name="max_network_performance" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.maxNetworkPerformance"></a>

```python
max_network_performance: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_vcpu`<sup>Required</sup> <a name="max_vcpu" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.maxVcpu"></a>

```python
max_vcpu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_enis`<sup>Required</sup> <a name="min_enis" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.minEnis"></a>

```python
min_enis: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_gpu`<sup>Required</sup> <a name="min_gpu" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.minGpu"></a>

```python
min_gpu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_memory_gib`<sup>Required</sup> <a name="min_memory_gib" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.minMemoryGib"></a>

```python
min_memory_gib: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_network_performance`<sup>Required</sup> <a name="min_network_performance" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.minNetworkPerformance"></a>

```python
min_network_performance: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_vcpu`<sup>Required</sup> <a name="min_vcpu" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.minVcpu"></a>

```python
min_vcpu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `root_device_types`<sup>Required</sup> <a name="root_device_types" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.rootDeviceTypes"></a>

```python
root_device_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `virtualization_types`<sup>Required</sup> <a name="virtualization_types" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.virtualizationTypes"></a>

```python
virtualization_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanAws.OceanAwsFiltersOutputReference.property.internalValue"></a>

```python
internal_value: OceanAwsFilters
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsFilters">OceanAwsFilters</a>

---


### OceanAwsInstanceMetadataOptionsOutputReference <a name="OceanAwsInstanceMetadataOptionsOutputReference" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_aws

oceanAws.OceanAwsInstanceMetadataOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.resetHttpPutResponseHopLimit">reset_http_put_response_hop_limit</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_http_put_response_hop_limit` <a name="reset_http_put_response_hop_limit" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.resetHttpPutResponseHopLimit"></a>

```python
def reset_http_put_response_hop_limit() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimitInput">http_put_response_hop_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.property.httpTokensInput">http_tokens_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimit">http_put_response_hop_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.property.httpTokens">http_tokens</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptions">OceanAwsInstanceMetadataOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `http_put_response_hop_limit_input`<sup>Optional</sup> <a name="http_put_response_hop_limit_input" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimitInput"></a>

```python
http_put_response_hop_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `http_tokens_input`<sup>Optional</sup> <a name="http_tokens_input" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.property.httpTokensInput"></a>

```python
http_tokens_input: str
```

- *Type:* str

---

##### `http_put_response_hop_limit`<sup>Required</sup> <a name="http_put_response_hop_limit" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.property.httpPutResponseHopLimit"></a>

```python
http_put_response_hop_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `http_tokens`<sup>Required</sup> <a name="http_tokens" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.property.httpTokens"></a>

```python
http_tokens: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptionsOutputReference.property.internalValue"></a>

```python
internal_value: OceanAwsInstanceMetadataOptions
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsInstanceMetadataOptions">OceanAwsInstanceMetadataOptions</a>

---


### OceanAwsLoadBalancersList <a name="OceanAwsLoadBalancersList" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_aws

oceanAws.OceanAwsLoadBalancersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OceanAwsLoadBalancersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancers">OceanAwsLoadBalancers</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OceanAwsLoadBalancers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancers">OceanAwsLoadBalancers</a>]]

---


### OceanAwsLoadBalancersOutputReference <a name="OceanAwsLoadBalancersOutputReference" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_aws

oceanAws.OceanAwsLoadBalancersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.resetArn">reset_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_arn` <a name="reset_arn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.resetArn"></a>

```python
def reset_arn() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.property.arnInput">arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancers">OceanAwsLoadBalancers</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn_input`<sup>Optional</sup> <a name="arn_input" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.property.arnInput"></a>

```python
arn_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OceanAwsLoadBalancers]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoadBalancers">OceanAwsLoadBalancers</a>]

---


### OceanAwsLoggingExportOutputReference <a name="OceanAwsLoggingExportOutputReference" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_aws

oceanAws.OceanAwsLoggingExportOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.putS3">put_s3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.resetS3">reset_s3</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_s3` <a name="put_s3" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.putS3"></a>

```python
def put_s3(
  value: typing.Union[IResolvable, typing.List[OceanAwsLoggingExportS3]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.putS3.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3">OceanAwsLoggingExportS3</a>]]

---

##### `reset_s3` <a name="reset_s3" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.resetS3"></a>

```python
def reset_s3() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List">OceanAwsLoggingExportS3List</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.property.s3Input">s3_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3">OceanAwsLoggingExportS3</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExport">OceanAwsLoggingExport</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.property.s3"></a>

```python
s3: OceanAwsLoggingExportS3List
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List">OceanAwsLoggingExportS3List</a>

---

##### `s3_input`<sup>Optional</sup> <a name="s3_input" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.property.s3Input"></a>

```python
s3_input: typing.Union[IResolvable, typing.List[OceanAwsLoggingExportS3]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3">OceanAwsLoggingExportS3</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference.property.internalValue"></a>

```python
internal_value: OceanAwsLoggingExport
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExport">OceanAwsLoggingExport</a>

---


### OceanAwsLoggingExportS3List <a name="OceanAwsLoggingExportS3List" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_aws

oceanAws.OceanAwsLoggingExportS3List(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OceanAwsLoggingExportS3OutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3">OceanAwsLoggingExportS3</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3List.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OceanAwsLoggingExportS3]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3">OceanAwsLoggingExportS3</a>]]

---


### OceanAwsLoggingExportS3OutputReference <a name="OceanAwsLoggingExportS3OutputReference" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_aws

oceanAws.OceanAwsLoggingExportS3OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3">OceanAwsLoggingExportS3</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3OutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OceanAwsLoggingExportS3]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3">OceanAwsLoggingExportS3</a>]

---


### OceanAwsLoggingOutputReference <a name="OceanAwsLoggingOutputReference" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_aws

oceanAws.OceanAwsLoggingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.putExport">put_export</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.resetExport">reset_export</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_export` <a name="put_export" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.putExport"></a>

```python
def put_export(
  s3: typing.Union[IResolvable, typing.List[OceanAwsLoggingExportS3]] = None
) -> None
```

###### `s3`<sup>Optional</sup> <a name="s3" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.putExport.parameter.s3"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportS3">OceanAwsLoggingExportS3</a>]]

s3 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#s3 OceanAws#s3}

---

##### `reset_export` <a name="reset_export" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.resetExport"></a>

```python
def reset_export() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.property.export">export</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference">OceanAwsLoggingExportOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.property.exportInput">export_input</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExport">OceanAwsLoggingExport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLogging">OceanAwsLogging</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `export`<sup>Required</sup> <a name="export" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.property.export"></a>

```python
export: OceanAwsLoggingExportOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExportOutputReference">OceanAwsLoggingExportOutputReference</a>

---

##### `export_input`<sup>Optional</sup> <a name="export_input" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.property.exportInput"></a>

```python
export_input: OceanAwsLoggingExport
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingExport">OceanAwsLoggingExport</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanAws.OceanAwsLoggingOutputReference.property.internalValue"></a>

```python
internal_value: OceanAwsLogging
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsLogging">OceanAwsLogging</a>

---


### OceanAwsScheduledTaskList <a name="OceanAwsScheduledTaskList" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_aws

oceanAws.OceanAwsScheduledTaskList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OceanAwsScheduledTaskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTask">OceanAwsScheduledTask</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OceanAwsScheduledTask]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTask">OceanAwsScheduledTask</a>]]

---


### OceanAwsScheduledTaskOutputReference <a name="OceanAwsScheduledTaskOutputReference" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_aws

oceanAws.OceanAwsScheduledTaskOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.putShutdownHours">put_shutdown_hours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.putTasks">put_tasks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.resetShutdownHours">reset_shutdown_hours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.resetTasks">reset_tasks</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_shutdown_hours` <a name="put_shutdown_hours" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.putShutdownHours"></a>

```python
def put_shutdown_hours(
  time_windows: typing.List[str],
  is_enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `time_windows`<sup>Required</sup> <a name="time_windows" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.putShutdownHours.parameter.timeWindows"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#time_windows OceanAws#time_windows}.

---

###### `is_enabled`<sup>Optional</sup> <a name="is_enabled" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.putShutdownHours.parameter.isEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#is_enabled OceanAws#is_enabled}.

---

##### `put_tasks` <a name="put_tasks" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.putTasks"></a>

```python
def put_tasks(
  value: typing.Union[IResolvable, typing.List[OceanAwsScheduledTaskTasks]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.putTasks.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasks">OceanAwsScheduledTaskTasks</a>]]

---

##### `reset_shutdown_hours` <a name="reset_shutdown_hours" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.resetShutdownHours"></a>

```python
def reset_shutdown_hours() -> None
```

##### `reset_tasks` <a name="reset_tasks" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.resetTasks"></a>

```python
def reset_tasks() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.property.shutdownHours">shutdown_hours</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference">OceanAwsScheduledTaskShutdownHoursOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.property.tasks">tasks</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList">OceanAwsScheduledTaskTasksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.property.shutdownHoursInput">shutdown_hours_input</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHours">OceanAwsScheduledTaskShutdownHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.property.tasksInput">tasks_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasks">OceanAwsScheduledTaskTasks</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTask">OceanAwsScheduledTask</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `shutdown_hours`<sup>Required</sup> <a name="shutdown_hours" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.property.shutdownHours"></a>

```python
shutdown_hours: OceanAwsScheduledTaskShutdownHoursOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference">OceanAwsScheduledTaskShutdownHoursOutputReference</a>

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.property.tasks"></a>

```python
tasks: OceanAwsScheduledTaskTasksList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList">OceanAwsScheduledTaskTasksList</a>

---

##### `shutdown_hours_input`<sup>Optional</sup> <a name="shutdown_hours_input" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.property.shutdownHoursInput"></a>

```python
shutdown_hours_input: OceanAwsScheduledTaskShutdownHours
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHours">OceanAwsScheduledTaskShutdownHours</a>

---

##### `tasks_input`<sup>Optional</sup> <a name="tasks_input" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.property.tasksInput"></a>

```python
tasks_input: typing.Union[IResolvable, typing.List[OceanAwsScheduledTaskTasks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasks">OceanAwsScheduledTaskTasks</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OceanAwsScheduledTask]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTask">OceanAwsScheduledTask</a>]

---


### OceanAwsScheduledTaskShutdownHoursOutputReference <a name="OceanAwsScheduledTaskShutdownHoursOutputReference" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_aws

oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.resetIsEnabled">reset_is_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_enabled` <a name="reset_is_enabled" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.resetIsEnabled"></a>

```python
def reset_is_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.property.isEnabledInput">is_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.property.timeWindowsInput">time_windows_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.property.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.property.timeWindows">time_windows</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHours">OceanAwsScheduledTaskShutdownHours</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_enabled_input`<sup>Optional</sup> <a name="is_enabled_input" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.property.isEnabledInput"></a>

```python
is_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `time_windows_input`<sup>Optional</sup> <a name="time_windows_input" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.property.timeWindowsInput"></a>

```python
time_windows_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.property.isEnabled"></a>

```python
is_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `time_windows`<sup>Required</sup> <a name="time_windows" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.property.timeWindows"></a>

```python
time_windows: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHoursOutputReference.property.internalValue"></a>

```python
internal_value: OceanAwsScheduledTaskShutdownHours
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskShutdownHours">OceanAwsScheduledTaskShutdownHours</a>

---


### OceanAwsScheduledTaskTasksList <a name="OceanAwsScheduledTaskTasksList" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_aws

oceanAws.OceanAwsScheduledTaskTasksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OceanAwsScheduledTaskTasksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasks">OceanAwsScheduledTaskTasks</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OceanAwsScheduledTaskTasks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasks">OceanAwsScheduledTaskTasks</a>]]

---


### OceanAwsScheduledTaskTasksOutputReference <a name="OceanAwsScheduledTaskTasksOutputReference" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_aws

oceanAws.OceanAwsScheduledTaskTasksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.property.cronExpressionInput">cron_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.property.isEnabledInput">is_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.property.taskTypeInput">task_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.property.cronExpression">cron_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.property.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.property.taskType">task_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasks">OceanAwsScheduledTaskTasks</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cron_expression_input`<sup>Optional</sup> <a name="cron_expression_input" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.property.cronExpressionInput"></a>

```python
cron_expression_input: str
```

- *Type:* str

---

##### `is_enabled_input`<sup>Optional</sup> <a name="is_enabled_input" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.property.isEnabledInput"></a>

```python
is_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `task_type_input`<sup>Optional</sup> <a name="task_type_input" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.property.taskTypeInput"></a>

```python
task_type_input: str
```

- *Type:* str

---

##### `cron_expression`<sup>Required</sup> <a name="cron_expression" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.property.cronExpression"></a>

```python
cron_expression: str
```

- *Type:* str

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.property.isEnabled"></a>

```python
is_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `task_type`<sup>Required</sup> <a name="task_type" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.property.taskType"></a>

```python
task_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasksOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OceanAwsScheduledTaskTasks]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsScheduledTaskTasks">OceanAwsScheduledTaskTasks</a>]

---


### OceanAwsTagsList <a name="OceanAwsTagsList" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_aws

oceanAws.OceanAwsTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OceanAwsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTags">OceanAwsTags</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OceanAwsTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTags">OceanAwsTags</a>]]

---


### OceanAwsTagsOutputReference <a name="OceanAwsTagsOutputReference" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_aws

oceanAws.OceanAwsTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTags">OceanAwsTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanAws.OceanAwsTagsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OceanAwsTags]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsTags">OceanAwsTags</a>]

---


### OceanAwsUpdatePolicyOutputReference <a name="OceanAwsUpdatePolicyOutputReference" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_aws

oceanAws.OceanAwsUpdatePolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.putRollConfig">put_roll_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.resetAutoApplyTags">reset_auto_apply_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.resetConditionedRoll">reset_conditioned_roll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.resetRollConfig">reset_roll_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_roll_config` <a name="put_roll_config" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.putRollConfig"></a>

```python
def put_roll_config(
  batch_size_percentage: typing.Union[int, float],
  batch_min_healthy_percentage: typing.Union[int, float] = None,
  launch_spec_ids: typing.List[str] = None,
  respect_pdb: typing.Union[bool, IResolvable] = None
) -> None
```

###### `batch_size_percentage`<sup>Required</sup> <a name="batch_size_percentage" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.putRollConfig.parameter.batchSizePercentage"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#batch_size_percentage OceanAws#batch_size_percentage}.

---

###### `batch_min_healthy_percentage`<sup>Optional</sup> <a name="batch_min_healthy_percentage" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.putRollConfig.parameter.batchMinHealthyPercentage"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#batch_min_healthy_percentage OceanAws#batch_min_healthy_percentage}.

---

###### `launch_spec_ids`<sup>Optional</sup> <a name="launch_spec_ids" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.putRollConfig.parameter.launchSpecIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#launch_spec_ids OceanAws#launch_spec_ids}.

---

###### `respect_pdb`<sup>Optional</sup> <a name="respect_pdb" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.putRollConfig.parameter.respectPdb"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.124.0/docs/resources/ocean_aws#respect_pdb OceanAws#respect_pdb}.

---

##### `reset_auto_apply_tags` <a name="reset_auto_apply_tags" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.resetAutoApplyTags"></a>

```python
def reset_auto_apply_tags() -> None
```

##### `reset_conditioned_roll` <a name="reset_conditioned_roll" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.resetConditionedRoll"></a>

```python
def reset_conditioned_roll() -> None
```

##### `reset_roll_config` <a name="reset_roll_config" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.resetRollConfig"></a>

```python
def reset_roll_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.rollConfig">roll_config</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference">OceanAwsUpdatePolicyRollConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.autoApplyTagsInput">auto_apply_tags_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.conditionedRollInput">conditioned_roll_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.rollConfigInput">roll_config_input</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfig">OceanAwsUpdatePolicyRollConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.shouldRollInput">should_roll_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.autoApplyTags">auto_apply_tags</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.conditionedRoll">conditioned_roll</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.shouldRoll">should_roll</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicy">OceanAwsUpdatePolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `roll_config`<sup>Required</sup> <a name="roll_config" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.rollConfig"></a>

```python
roll_config: OceanAwsUpdatePolicyRollConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference">OceanAwsUpdatePolicyRollConfigOutputReference</a>

---

##### `auto_apply_tags_input`<sup>Optional</sup> <a name="auto_apply_tags_input" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.autoApplyTagsInput"></a>

```python
auto_apply_tags_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `conditioned_roll_input`<sup>Optional</sup> <a name="conditioned_roll_input" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.conditionedRollInput"></a>

```python
conditioned_roll_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `roll_config_input`<sup>Optional</sup> <a name="roll_config_input" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.rollConfigInput"></a>

```python
roll_config_input: OceanAwsUpdatePolicyRollConfig
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfig">OceanAwsUpdatePolicyRollConfig</a>

---

##### `should_roll_input`<sup>Optional</sup> <a name="should_roll_input" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.shouldRollInput"></a>

```python
should_roll_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_apply_tags`<sup>Required</sup> <a name="auto_apply_tags" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.autoApplyTags"></a>

```python
auto_apply_tags: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `conditioned_roll`<sup>Required</sup> <a name="conditioned_roll" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.conditionedRoll"></a>

```python
conditioned_roll: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `should_roll`<sup>Required</sup> <a name="should_roll" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.shouldRoll"></a>

```python
should_roll: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyOutputReference.property.internalValue"></a>

```python
internal_value: OceanAwsUpdatePolicy
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicy">OceanAwsUpdatePolicy</a>

---


### OceanAwsUpdatePolicyRollConfigOutputReference <a name="OceanAwsUpdatePolicyRollConfigOutputReference" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_aws

oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.resetBatchMinHealthyPercentage">reset_batch_min_healthy_percentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.resetLaunchSpecIds">reset_launch_spec_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.resetRespectPdb">reset_respect_pdb</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_batch_min_healthy_percentage` <a name="reset_batch_min_healthy_percentage" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.resetBatchMinHealthyPercentage"></a>

```python
def reset_batch_min_healthy_percentage() -> None
```

##### `reset_launch_spec_ids` <a name="reset_launch_spec_ids" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.resetLaunchSpecIds"></a>

```python
def reset_launch_spec_ids() -> None
```

##### `reset_respect_pdb` <a name="reset_respect_pdb" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.resetRespectPdb"></a>

```python
def reset_respect_pdb() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.batchMinHealthyPercentageInput">batch_min_healthy_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.batchSizePercentageInput">batch_size_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.launchSpecIdsInput">launch_spec_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.respectPdbInput">respect_pdb_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.batchMinHealthyPercentage">batch_min_healthy_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.batchSizePercentage">batch_size_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.launchSpecIds">launch_spec_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.respectPdb">respect_pdb</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfig">OceanAwsUpdatePolicyRollConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `batch_min_healthy_percentage_input`<sup>Optional</sup> <a name="batch_min_healthy_percentage_input" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.batchMinHealthyPercentageInput"></a>

```python
batch_min_healthy_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `batch_size_percentage_input`<sup>Optional</sup> <a name="batch_size_percentage_input" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.batchSizePercentageInput"></a>

```python
batch_size_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `launch_spec_ids_input`<sup>Optional</sup> <a name="launch_spec_ids_input" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.launchSpecIdsInput"></a>

```python
launch_spec_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `respect_pdb_input`<sup>Optional</sup> <a name="respect_pdb_input" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.respectPdbInput"></a>

```python
respect_pdb_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `batch_min_healthy_percentage`<sup>Required</sup> <a name="batch_min_healthy_percentage" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.batchMinHealthyPercentage"></a>

```python
batch_min_healthy_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `batch_size_percentage`<sup>Required</sup> <a name="batch_size_percentage" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.batchSizePercentage"></a>

```python
batch_size_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `launch_spec_ids`<sup>Required</sup> <a name="launch_spec_ids" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.launchSpecIds"></a>

```python
launch_spec_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `respect_pdb`<sup>Required</sup> <a name="respect_pdb" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.respectPdb"></a>

```python
respect_pdb: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfigOutputReference.property.internalValue"></a>

```python
internal_value: OceanAwsUpdatePolicyRollConfig
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAws.OceanAwsUpdatePolicyRollConfig">OceanAwsUpdatePolicyRollConfig</a>

---



