# `elastigroupAzureV3` Submodule <a name="`elastigroupAzureV3` Submodule" id="@cdktf/provider-spotinst.elastigroupAzureV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElastigroupAzureV3 <a name="ElastigroupAzureV3" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3 spotinst_elastigroup_azure_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure_v3.ElastigroupAzureV3;

ElastigroupAzureV3.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .fallbackToOnDemand(java.lang.Boolean)
    .fallbackToOnDemand(IResolvable)
    .name(java.lang.String)
    .network(ElastigroupAzureV3Network)
    .odSizes(java.util.List<java.lang.String>)
    .os(java.lang.String)
    .region(java.lang.String)
    .resourceGroupName(java.lang.String)
    .spotSizes(java.util.List<java.lang.String>)
//  .customData(java.lang.String)
//  .desiredCapacity(java.lang.Number)
//  .drainingTimeout(java.lang.Number)
//  .id(java.lang.String)
//  .image(IResolvable)
//  .image(java.util.List<ElastigroupAzureV3Image>)
//  .login(ElastigroupAzureV3Login)
//  .managedServiceIdentity(IResolvable)
//  .managedServiceIdentity(java.util.List<ElastigroupAzureV3ManagedServiceIdentity>)
//  .maxSize(java.lang.Number)
//  .minSize(java.lang.Number)
//  .onDemandCount(java.lang.Number)
//  .spotPercentage(java.lang.Number)
//  .tags(IResolvable)
//  .tags(java.util.List<ElastigroupAzureV3Tags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.fallbackToOnDemand">fallbackToOnDemand</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#fallback_to_on_demand ElastigroupAzureV3#fallback_to_on_demand}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#name ElastigroupAzureV3#name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.network">network</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Network">ElastigroupAzureV3Network</a></code> | network block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.odSizes">odSizes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#od_sizes ElastigroupAzureV3#od_sizes}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.os">os</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#os ElastigroupAzureV3#os}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#region ElastigroupAzureV3#region}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#resource_group_name ElastigroupAzureV3#resource_group_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.spotSizes">spotSizes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#spot_sizes ElastigroupAzureV3#spot_sizes}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.customData">customData</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#custom_data ElastigroupAzureV3#custom_data}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.desiredCapacity">desiredCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#desired_capacity ElastigroupAzureV3#desired_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.drainingTimeout">drainingTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#draining_timeout ElastigroupAzureV3#draining_timeout}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#id ElastigroupAzureV3#id}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.image">image</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Image">ElastigroupAzureV3Image</a>></code> | image block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.login">login</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Login">ElastigroupAzureV3Login</a></code> | login block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.managedServiceIdentity">managedServiceIdentity</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentity">ElastigroupAzureV3ManagedServiceIdentity</a>></code> | managed_service_identity block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.maxSize">maxSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#max_size ElastigroupAzureV3#max_size}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.minSize">minSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#min_size ElastigroupAzureV3#min_size}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.onDemandCount">onDemandCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#on_demand_count ElastigroupAzureV3#on_demand_count}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.spotPercentage">spotPercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#spot_percentage ElastigroupAzureV3#spot_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.tags">tags</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Tags">ElastigroupAzureV3Tags</a>></code> | tags block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `fallbackToOnDemand`<sup>Required</sup> <a name="fallbackToOnDemand" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.fallbackToOnDemand"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#fallback_to_on_demand ElastigroupAzureV3#fallback_to_on_demand}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#name ElastigroupAzureV3#name}.

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.network"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Network">ElastigroupAzureV3Network</a>

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#network ElastigroupAzureV3#network}

---

##### `odSizes`<sup>Required</sup> <a name="odSizes" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.odSizes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#od_sizes ElastigroupAzureV3#od_sizes}.

---

##### `os`<sup>Required</sup> <a name="os" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.os"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#os ElastigroupAzureV3#os}.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#region ElastigroupAzureV3#region}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#resource_group_name ElastigroupAzureV3#resource_group_name}.

---

##### `spotSizes`<sup>Required</sup> <a name="spotSizes" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.spotSizes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#spot_sizes ElastigroupAzureV3#spot_sizes}.

---

##### `customData`<sup>Optional</sup> <a name="customData" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.customData"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#custom_data ElastigroupAzureV3#custom_data}.

---

##### `desiredCapacity`<sup>Optional</sup> <a name="desiredCapacity" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.desiredCapacity"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#desired_capacity ElastigroupAzureV3#desired_capacity}.

---

##### `drainingTimeout`<sup>Optional</sup> <a name="drainingTimeout" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.drainingTimeout"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#draining_timeout ElastigroupAzureV3#draining_timeout}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#id ElastigroupAzureV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `image`<sup>Optional</sup> <a name="image" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.image"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Image">ElastigroupAzureV3Image</a>>

image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#image ElastigroupAzureV3#image}

---

##### `login`<sup>Optional</sup> <a name="login" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.login"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Login">ElastigroupAzureV3Login</a>

login block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#login ElastigroupAzureV3#login}

---

##### `managedServiceIdentity`<sup>Optional</sup> <a name="managedServiceIdentity" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.managedServiceIdentity"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentity">ElastigroupAzureV3ManagedServiceIdentity</a>>

managed_service_identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#managed_service_identity ElastigroupAzureV3#managed_service_identity}

---

##### `maxSize`<sup>Optional</sup> <a name="maxSize" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.maxSize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#max_size ElastigroupAzureV3#max_size}.

---

##### `minSize`<sup>Optional</sup> <a name="minSize" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.minSize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#min_size ElastigroupAzureV3#min_size}.

---

##### `onDemandCount`<sup>Optional</sup> <a name="onDemandCount" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.onDemandCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#on_demand_count ElastigroupAzureV3#on_demand_count}.

---

##### `spotPercentage`<sup>Optional</sup> <a name="spotPercentage" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.spotPercentage"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#spot_percentage ElastigroupAzureV3#spot_percentage}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.Initializer.parameter.tags"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Tags">ElastigroupAzureV3Tags</a>>

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#tags ElastigroupAzureV3#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.putImage">putImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.putLogin">putLogin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.putManagedServiceIdentity">putManagedServiceIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.putNetwork">putNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetCustomData">resetCustomData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetDesiredCapacity">resetDesiredCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetDrainingTimeout">resetDrainingTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetImage">resetImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetLogin">resetLogin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetManagedServiceIdentity">resetManagedServiceIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetMaxSize">resetMaxSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetMinSize">resetMinSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetOnDemandCount">resetOnDemandCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetSpotPercentage">resetSpotPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putImage` <a name="putImage" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.putImage"></a>

```java
public void putImage(IResolvable OR java.util.List<ElastigroupAzureV3Image> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.putImage.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Image">ElastigroupAzureV3Image</a>>

---

##### `putLogin` <a name="putLogin" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.putLogin"></a>

```java
public void putLogin(ElastigroupAzureV3Login value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.putLogin.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Login">ElastigroupAzureV3Login</a>

---

##### `putManagedServiceIdentity` <a name="putManagedServiceIdentity" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.putManagedServiceIdentity"></a>

```java
public void putManagedServiceIdentity(IResolvable OR java.util.List<ElastigroupAzureV3ManagedServiceIdentity> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.putManagedServiceIdentity.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentity">ElastigroupAzureV3ManagedServiceIdentity</a>>

---

##### `putNetwork` <a name="putNetwork" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.putNetwork"></a>

```java
public void putNetwork(ElastigroupAzureV3Network value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.putNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Network">ElastigroupAzureV3Network</a>

---

##### `putTags` <a name="putTags" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.putTags"></a>

```java
public void putTags(IResolvable OR java.util.List<ElastigroupAzureV3Tags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.putTags.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Tags">ElastigroupAzureV3Tags</a>>

---

##### `resetCustomData` <a name="resetCustomData" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetCustomData"></a>

```java
public void resetCustomData()
```

##### `resetDesiredCapacity` <a name="resetDesiredCapacity" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetDesiredCapacity"></a>

```java
public void resetDesiredCapacity()
```

##### `resetDrainingTimeout` <a name="resetDrainingTimeout" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetDrainingTimeout"></a>

```java
public void resetDrainingTimeout()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetId"></a>

```java
public void resetId()
```

##### `resetImage` <a name="resetImage" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetImage"></a>

```java
public void resetImage()
```

##### `resetLogin` <a name="resetLogin" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetLogin"></a>

```java
public void resetLogin()
```

##### `resetManagedServiceIdentity` <a name="resetManagedServiceIdentity" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetManagedServiceIdentity"></a>

```java
public void resetManagedServiceIdentity()
```

##### `resetMaxSize` <a name="resetMaxSize" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetMaxSize"></a>

```java
public void resetMaxSize()
```

##### `resetMinSize` <a name="resetMinSize" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetMinSize"></a>

```java
public void resetMinSize()
```

##### `resetOnDemandCount` <a name="resetOnDemandCount" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetOnDemandCount"></a>

```java
public void resetOnDemandCount()
```

##### `resetSpotPercentage` <a name="resetSpotPercentage" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetSpotPercentage"></a>

```java
public void resetSpotPercentage()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ElastigroupAzureV3 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure_v3.ElastigroupAzureV3;

ElastigroupAzureV3.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure_v3.ElastigroupAzureV3;

ElastigroupAzureV3.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure_v3.ElastigroupAzureV3;

ElastigroupAzureV3.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure_v3.ElastigroupAzureV3;

ElastigroupAzureV3.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ElastigroupAzureV3.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ElastigroupAzureV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ElastigroupAzureV3 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ElastigroupAzureV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ElastigroupAzureV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.image">image</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList">ElastigroupAzureV3ImageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.login">login</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference">ElastigroupAzureV3LoginOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.managedServiceIdentity">managedServiceIdentity</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList">ElastigroupAzureV3ManagedServiceIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.network">network</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference">ElastigroupAzureV3NetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList">ElastigroupAzureV3TagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.customDataInput">customDataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.desiredCapacityInput">desiredCapacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.drainingTimeoutInput">drainingTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.fallbackToOnDemandInput">fallbackToOnDemandInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.imageInput">imageInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Image">ElastigroupAzureV3Image</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.loginInput">loginInput</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Login">ElastigroupAzureV3Login</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.managedServiceIdentityInput">managedServiceIdentityInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentity">ElastigroupAzureV3ManagedServiceIdentity</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.maxSizeInput">maxSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.minSizeInput">minSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.networkInput">networkInput</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Network">ElastigroupAzureV3Network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.odSizesInput">odSizesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.onDemandCountInput">onDemandCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.osInput">osInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.spotPercentageInput">spotPercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.spotSizesInput">spotSizesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.tagsInput">tagsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Tags">ElastigroupAzureV3Tags</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.customData">customData</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.desiredCapacity">desiredCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.drainingTimeout">drainingTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.fallbackToOnDemand">fallbackToOnDemand</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.maxSize">maxSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.minSize">minSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.odSizes">odSizes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.onDemandCount">onDemandCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.os">os</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.spotPercentage">spotPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.spotSizes">spotSizes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.image"></a>

```java
public ElastigroupAzureV3ImageList getImage();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList">ElastigroupAzureV3ImageList</a>

---

##### `login`<sup>Required</sup> <a name="login" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.login"></a>

```java
public ElastigroupAzureV3LoginOutputReference getLogin();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference">ElastigroupAzureV3LoginOutputReference</a>

---

##### `managedServiceIdentity`<sup>Required</sup> <a name="managedServiceIdentity" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.managedServiceIdentity"></a>

```java
public ElastigroupAzureV3ManagedServiceIdentityList getManagedServiceIdentity();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList">ElastigroupAzureV3ManagedServiceIdentityList</a>

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.network"></a>

```java
public ElastigroupAzureV3NetworkOutputReference getNetwork();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference">ElastigroupAzureV3NetworkOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.tags"></a>

```java
public ElastigroupAzureV3TagsList getTags();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList">ElastigroupAzureV3TagsList</a>

---

##### `customDataInput`<sup>Optional</sup> <a name="customDataInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.customDataInput"></a>

```java
public java.lang.String getCustomDataInput();
```

- *Type:* java.lang.String

---

##### `desiredCapacityInput`<sup>Optional</sup> <a name="desiredCapacityInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.desiredCapacityInput"></a>

```java
public java.lang.Number getDesiredCapacityInput();
```

- *Type:* java.lang.Number

---

##### `drainingTimeoutInput`<sup>Optional</sup> <a name="drainingTimeoutInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.drainingTimeoutInput"></a>

```java
public java.lang.Number getDrainingTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `fallbackToOnDemandInput`<sup>Optional</sup> <a name="fallbackToOnDemandInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.fallbackToOnDemandInput"></a>

```java
public java.lang.Object getFallbackToOnDemandInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.imageInput"></a>

```java
public java.lang.Object getImageInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Image">ElastigroupAzureV3Image</a>>

---

##### `loginInput`<sup>Optional</sup> <a name="loginInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.loginInput"></a>

```java
public ElastigroupAzureV3Login getLoginInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Login">ElastigroupAzureV3Login</a>

---

##### `managedServiceIdentityInput`<sup>Optional</sup> <a name="managedServiceIdentityInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.managedServiceIdentityInput"></a>

```java
public java.lang.Object getManagedServiceIdentityInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentity">ElastigroupAzureV3ManagedServiceIdentity</a>>

---

##### `maxSizeInput`<sup>Optional</sup> <a name="maxSizeInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.maxSizeInput"></a>

```java
public java.lang.Number getMaxSizeInput();
```

- *Type:* java.lang.Number

---

##### `minSizeInput`<sup>Optional</sup> <a name="minSizeInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.minSizeInput"></a>

```java
public java.lang.Number getMinSizeInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.networkInput"></a>

```java
public ElastigroupAzureV3Network getNetworkInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Network">ElastigroupAzureV3Network</a>

---

##### `odSizesInput`<sup>Optional</sup> <a name="odSizesInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.odSizesInput"></a>

```java
public java.util.List<java.lang.String> getOdSizesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `onDemandCountInput`<sup>Optional</sup> <a name="onDemandCountInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.onDemandCountInput"></a>

```java
public java.lang.Number getOnDemandCountInput();
```

- *Type:* java.lang.Number

---

##### `osInput`<sup>Optional</sup> <a name="osInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.osInput"></a>

```java
public java.lang.String getOsInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `spotPercentageInput`<sup>Optional</sup> <a name="spotPercentageInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.spotPercentageInput"></a>

```java
public java.lang.Number getSpotPercentageInput();
```

- *Type:* java.lang.Number

---

##### `spotSizesInput`<sup>Optional</sup> <a name="spotSizesInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.spotSizesInput"></a>

```java
public java.util.List<java.lang.String> getSpotSizesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.tagsInput"></a>

```java
public java.lang.Object getTagsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Tags">ElastigroupAzureV3Tags</a>>

---

##### `customData`<sup>Required</sup> <a name="customData" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.customData"></a>

```java
public java.lang.String getCustomData();
```

- *Type:* java.lang.String

---

##### `desiredCapacity`<sup>Required</sup> <a name="desiredCapacity" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.desiredCapacity"></a>

```java
public java.lang.Number getDesiredCapacity();
```

- *Type:* java.lang.Number

---

##### `drainingTimeout`<sup>Required</sup> <a name="drainingTimeout" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.drainingTimeout"></a>

```java
public java.lang.Number getDrainingTimeout();
```

- *Type:* java.lang.Number

---

##### `fallbackToOnDemand`<sup>Required</sup> <a name="fallbackToOnDemand" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.fallbackToOnDemand"></a>

```java
public java.lang.Object getFallbackToOnDemand();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `maxSize`<sup>Required</sup> <a name="maxSize" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.maxSize"></a>

```java
public java.lang.Number getMaxSize();
```

- *Type:* java.lang.Number

---

##### `minSize`<sup>Required</sup> <a name="minSize" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.minSize"></a>

```java
public java.lang.Number getMinSize();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `odSizes`<sup>Required</sup> <a name="odSizes" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.odSizes"></a>

```java
public java.util.List<java.lang.String> getOdSizes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `onDemandCount`<sup>Required</sup> <a name="onDemandCount" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.onDemandCount"></a>

```java
public java.lang.Number getOnDemandCount();
```

- *Type:* java.lang.Number

---

##### `os`<sup>Required</sup> <a name="os" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.os"></a>

```java
public java.lang.String getOs();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `spotPercentage`<sup>Required</sup> <a name="spotPercentage" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.spotPercentage"></a>

```java
public java.lang.Number getSpotPercentage();
```

- *Type:* java.lang.Number

---

##### `spotSizes`<sup>Required</sup> <a name="spotSizes" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.spotSizes"></a>

```java
public java.util.List<java.lang.String> getSpotSizes();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ElastigroupAzureV3Config <a name="ElastigroupAzureV3Config" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure_v3.ElastigroupAzureV3Config;

ElastigroupAzureV3Config.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .fallbackToOnDemand(java.lang.Boolean)
    .fallbackToOnDemand(IResolvable)
    .name(java.lang.String)
    .network(ElastigroupAzureV3Network)
    .odSizes(java.util.List<java.lang.String>)
    .os(java.lang.String)
    .region(java.lang.String)
    .resourceGroupName(java.lang.String)
    .spotSizes(java.util.List<java.lang.String>)
//  .customData(java.lang.String)
//  .desiredCapacity(java.lang.Number)
//  .drainingTimeout(java.lang.Number)
//  .id(java.lang.String)
//  .image(IResolvable)
//  .image(java.util.List<ElastigroupAzureV3Image>)
//  .login(ElastigroupAzureV3Login)
//  .managedServiceIdentity(IResolvable)
//  .managedServiceIdentity(java.util.List<ElastigroupAzureV3ManagedServiceIdentity>)
//  .maxSize(java.lang.Number)
//  .minSize(java.lang.Number)
//  .onDemandCount(java.lang.Number)
//  .spotPercentage(java.lang.Number)
//  .tags(IResolvable)
//  .tags(java.util.List<ElastigroupAzureV3Tags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.fallbackToOnDemand">fallbackToOnDemand</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#fallback_to_on_demand ElastigroupAzureV3#fallback_to_on_demand}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#name ElastigroupAzureV3#name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.network">network</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Network">ElastigroupAzureV3Network</a></code> | network block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.odSizes">odSizes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#od_sizes ElastigroupAzureV3#od_sizes}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.os">os</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#os ElastigroupAzureV3#os}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#region ElastigroupAzureV3#region}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#resource_group_name ElastigroupAzureV3#resource_group_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.spotSizes">spotSizes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#spot_sizes ElastigroupAzureV3#spot_sizes}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.customData">customData</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#custom_data ElastigroupAzureV3#custom_data}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.desiredCapacity">desiredCapacity</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#desired_capacity ElastigroupAzureV3#desired_capacity}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.drainingTimeout">drainingTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#draining_timeout ElastigroupAzureV3#draining_timeout}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#id ElastigroupAzureV3#id}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.image">image</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Image">ElastigroupAzureV3Image</a>></code> | image block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.login">login</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Login">ElastigroupAzureV3Login</a></code> | login block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.managedServiceIdentity">managedServiceIdentity</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentity">ElastigroupAzureV3ManagedServiceIdentity</a>></code> | managed_service_identity block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.maxSize">maxSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#max_size ElastigroupAzureV3#max_size}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.minSize">minSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#min_size ElastigroupAzureV3#min_size}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.onDemandCount">onDemandCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#on_demand_count ElastigroupAzureV3#on_demand_count}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.spotPercentage">spotPercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#spot_percentage ElastigroupAzureV3#spot_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.tags">tags</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Tags">ElastigroupAzureV3Tags</a>></code> | tags block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `fallbackToOnDemand`<sup>Required</sup> <a name="fallbackToOnDemand" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.fallbackToOnDemand"></a>

```java
public java.lang.Object getFallbackToOnDemand();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#fallback_to_on_demand ElastigroupAzureV3#fallback_to_on_demand}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#name ElastigroupAzureV3#name}.

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.network"></a>

```java
public ElastigroupAzureV3Network getNetwork();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Network">ElastigroupAzureV3Network</a>

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#network ElastigroupAzureV3#network}

---

##### `odSizes`<sup>Required</sup> <a name="odSizes" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.odSizes"></a>

```java
public java.util.List<java.lang.String> getOdSizes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#od_sizes ElastigroupAzureV3#od_sizes}.

---

##### `os`<sup>Required</sup> <a name="os" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.os"></a>

```java
public java.lang.String getOs();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#os ElastigroupAzureV3#os}.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#region ElastigroupAzureV3#region}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#resource_group_name ElastigroupAzureV3#resource_group_name}.

---

##### `spotSizes`<sup>Required</sup> <a name="spotSizes" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.spotSizes"></a>

```java
public java.util.List<java.lang.String> getSpotSizes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#spot_sizes ElastigroupAzureV3#spot_sizes}.

---

##### `customData`<sup>Optional</sup> <a name="customData" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.customData"></a>

```java
public java.lang.String getCustomData();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#custom_data ElastigroupAzureV3#custom_data}.

---

##### `desiredCapacity`<sup>Optional</sup> <a name="desiredCapacity" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.desiredCapacity"></a>

```java
public java.lang.Number getDesiredCapacity();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#desired_capacity ElastigroupAzureV3#desired_capacity}.

---

##### `drainingTimeout`<sup>Optional</sup> <a name="drainingTimeout" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.drainingTimeout"></a>

```java
public java.lang.Number getDrainingTimeout();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#draining_timeout ElastigroupAzureV3#draining_timeout}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#id ElastigroupAzureV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `image`<sup>Optional</sup> <a name="image" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.image"></a>

```java
public java.lang.Object getImage();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Image">ElastigroupAzureV3Image</a>>

image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#image ElastigroupAzureV3#image}

---

##### `login`<sup>Optional</sup> <a name="login" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.login"></a>

```java
public ElastigroupAzureV3Login getLogin();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Login">ElastigroupAzureV3Login</a>

login block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#login ElastigroupAzureV3#login}

---

##### `managedServiceIdentity`<sup>Optional</sup> <a name="managedServiceIdentity" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.managedServiceIdentity"></a>

```java
public java.lang.Object getManagedServiceIdentity();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentity">ElastigroupAzureV3ManagedServiceIdentity</a>>

managed_service_identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#managed_service_identity ElastigroupAzureV3#managed_service_identity}

---

##### `maxSize`<sup>Optional</sup> <a name="maxSize" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.maxSize"></a>

```java
public java.lang.Number getMaxSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#max_size ElastigroupAzureV3#max_size}.

---

##### `minSize`<sup>Optional</sup> <a name="minSize" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.minSize"></a>

```java
public java.lang.Number getMinSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#min_size ElastigroupAzureV3#min_size}.

---

##### `onDemandCount`<sup>Optional</sup> <a name="onDemandCount" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.onDemandCount"></a>

```java
public java.lang.Number getOnDemandCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#on_demand_count ElastigroupAzureV3#on_demand_count}.

---

##### `spotPercentage`<sup>Optional</sup> <a name="spotPercentage" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.spotPercentage"></a>

```java
public java.lang.Number getSpotPercentage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#spot_percentage ElastigroupAzureV3#spot_percentage}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Config.property.tags"></a>

```java
public java.lang.Object getTags();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Tags">ElastigroupAzureV3Tags</a>>

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#tags ElastigroupAzureV3#tags}

---

### ElastigroupAzureV3Image <a name="ElastigroupAzureV3Image" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Image"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Image.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure_v3.ElastigroupAzureV3Image;

ElastigroupAzureV3Image.builder()
//  .custom(IResolvable)
//  .custom(java.util.List<ElastigroupAzureV3ImageCustom>)
//  .marketplace(IResolvable)
//  .marketplace(java.util.List<ElastigroupAzureV3ImageMarketplace>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Image.property.custom">custom</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustom">ElastigroupAzureV3ImageCustom</a>></code> | custom block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Image.property.marketplace">marketplace</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplace">ElastigroupAzureV3ImageMarketplace</a>></code> | marketplace block. |

---

##### `custom`<sup>Optional</sup> <a name="custom" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Image.property.custom"></a>

```java
public java.lang.Object getCustom();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustom">ElastigroupAzureV3ImageCustom</a>>

custom block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#custom ElastigroupAzureV3#custom}

---

##### `marketplace`<sup>Optional</sup> <a name="marketplace" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Image.property.marketplace"></a>

```java
public java.lang.Object getMarketplace();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplace">ElastigroupAzureV3ImageMarketplace</a>>

marketplace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#marketplace ElastigroupAzureV3#marketplace}

---

### ElastigroupAzureV3ImageCustom <a name="ElastigroupAzureV3ImageCustom" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustom.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure_v3.ElastigroupAzureV3ImageCustom;

ElastigroupAzureV3ImageCustom.builder()
    .imageName(java.lang.String)
    .resourceGroupName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustom.property.imageName">imageName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#image_name ElastigroupAzureV3#image_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustom.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#resource_group_name ElastigroupAzureV3#resource_group_name}. |

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustom.property.imageName"></a>

```java
public java.lang.String getImageName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#image_name ElastigroupAzureV3#image_name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustom.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#resource_group_name ElastigroupAzureV3#resource_group_name}.

---

### ElastigroupAzureV3ImageMarketplace <a name="ElastigroupAzureV3ImageMarketplace" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplace"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplace.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure_v3.ElastigroupAzureV3ImageMarketplace;

ElastigroupAzureV3ImageMarketplace.builder()
    .offer(java.lang.String)
    .publisher(java.lang.String)
    .sku(java.lang.String)
    .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplace.property.offer">offer</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#offer ElastigroupAzureV3#offer}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplace.property.publisher">publisher</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#publisher ElastigroupAzureV3#publisher}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplace.property.sku">sku</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#sku ElastigroupAzureV3#sku}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplace.property.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#version ElastigroupAzureV3#version}. |

---

##### `offer`<sup>Required</sup> <a name="offer" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplace.property.offer"></a>

```java
public java.lang.String getOffer();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#offer ElastigroupAzureV3#offer}.

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplace.property.publisher"></a>

```java
public java.lang.String getPublisher();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#publisher ElastigroupAzureV3#publisher}.

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplace.property.sku"></a>

```java
public java.lang.String getSku();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#sku ElastigroupAzureV3#sku}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplace.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#version ElastigroupAzureV3#version}.

---

### ElastigroupAzureV3Login <a name="ElastigroupAzureV3Login" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Login"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Login.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure_v3.ElastigroupAzureV3Login;

ElastigroupAzureV3Login.builder()
    .userName(java.lang.String)
//  .password(java.lang.String)
//  .sshPublicKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Login.property.userName">userName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#user_name ElastigroupAzureV3#user_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Login.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#password ElastigroupAzureV3#password}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Login.property.sshPublicKey">sshPublicKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#ssh_public_key ElastigroupAzureV3#ssh_public_key}. |

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Login.property.userName"></a>

```java
public java.lang.String getUserName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#user_name ElastigroupAzureV3#user_name}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Login.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#password ElastigroupAzureV3#password}.

---

##### `sshPublicKey`<sup>Optional</sup> <a name="sshPublicKey" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Login.property.sshPublicKey"></a>

```java
public java.lang.String getSshPublicKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#ssh_public_key ElastigroupAzureV3#ssh_public_key}.

---

### ElastigroupAzureV3ManagedServiceIdentity <a name="ElastigroupAzureV3ManagedServiceIdentity" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure_v3.ElastigroupAzureV3ManagedServiceIdentity;

ElastigroupAzureV3ManagedServiceIdentity.builder()
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentity.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#name ElastigroupAzureV3#name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentity.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#resource_group_name ElastigroupAzureV3#resource_group_name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentity.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#name ElastigroupAzureV3#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentity.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#resource_group_name ElastigroupAzureV3#resource_group_name}.

---

### ElastigroupAzureV3Network <a name="ElastigroupAzureV3Network" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Network"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Network.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure_v3.ElastigroupAzureV3Network;

ElastigroupAzureV3Network.builder()
    .networkInterfaces(IResolvable)
    .networkInterfaces(java.util.List<ElastigroupAzureV3NetworkNetworkInterfaces>)
    .resourceGroupName(java.lang.String)
    .virtualNetworkName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Network.property.networkInterfaces">networkInterfaces</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfaces">ElastigroupAzureV3NetworkNetworkInterfaces</a>></code> | network_interfaces block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Network.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#resource_group_name ElastigroupAzureV3#resource_group_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Network.property.virtualNetworkName">virtualNetworkName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#virtual_network_name ElastigroupAzureV3#virtual_network_name}. |

---

##### `networkInterfaces`<sup>Required</sup> <a name="networkInterfaces" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Network.property.networkInterfaces"></a>

```java
public java.lang.Object getNetworkInterfaces();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfaces">ElastigroupAzureV3NetworkNetworkInterfaces</a>>

network_interfaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#network_interfaces ElastigroupAzureV3#network_interfaces}

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Network.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#resource_group_name ElastigroupAzureV3#resource_group_name}.

---

##### `virtualNetworkName`<sup>Required</sup> <a name="virtualNetworkName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Network.property.virtualNetworkName"></a>

```java
public java.lang.String getVirtualNetworkName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#virtual_network_name ElastigroupAzureV3#virtual_network_name}.

---

### ElastigroupAzureV3NetworkNetworkInterfaces <a name="ElastigroupAzureV3NetworkNetworkInterfaces" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfaces.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure_v3.ElastigroupAzureV3NetworkNetworkInterfaces;

ElastigroupAzureV3NetworkNetworkInterfaces.builder()
    .assignPublicIp(java.lang.Boolean)
    .assignPublicIp(IResolvable)
    .isPrimary(java.lang.Boolean)
    .isPrimary(IResolvable)
    .subnetName(java.lang.String)
//  .additionalIpConfigs(IResolvable)
//  .additionalIpConfigs(java.util.List<ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs>)
//  .applicationSecurityGroup(IResolvable)
//  .applicationSecurityGroup(java.util.List<ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfaces.property.assignPublicIp">assignPublicIp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#assign_public_ip ElastigroupAzureV3#assign_public_ip}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfaces.property.isPrimary">isPrimary</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#is_primary ElastigroupAzureV3#is_primary}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfaces.property.subnetName">subnetName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#subnet_name ElastigroupAzureV3#subnet_name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfaces.property.additionalIpConfigs">additionalIpConfigs</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs">ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs</a>></code> | additional_ip_configs block. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfaces.property.applicationSecurityGroup">applicationSecurityGroup</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup">ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup</a>></code> | application_security_group block. |

---

##### `assignPublicIp`<sup>Required</sup> <a name="assignPublicIp" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfaces.property.assignPublicIp"></a>

```java
public java.lang.Object getAssignPublicIp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#assign_public_ip ElastigroupAzureV3#assign_public_ip}.

---

##### `isPrimary`<sup>Required</sup> <a name="isPrimary" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfaces.property.isPrimary"></a>

```java
public java.lang.Object getIsPrimary();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#is_primary ElastigroupAzureV3#is_primary}.

---

##### `subnetName`<sup>Required</sup> <a name="subnetName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfaces.property.subnetName"></a>

```java
public java.lang.String getSubnetName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#subnet_name ElastigroupAzureV3#subnet_name}.

---

##### `additionalIpConfigs`<sup>Optional</sup> <a name="additionalIpConfigs" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfaces.property.additionalIpConfigs"></a>

```java
public java.lang.Object getAdditionalIpConfigs();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs">ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs</a>>

additional_ip_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#additional_ip_configs ElastigroupAzureV3#additional_ip_configs}

---

##### `applicationSecurityGroup`<sup>Optional</sup> <a name="applicationSecurityGroup" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfaces.property.applicationSecurityGroup"></a>

```java
public java.lang.Object getApplicationSecurityGroup();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup">ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup</a>>

application_security_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#application_security_group ElastigroupAzureV3#application_security_group}

---

### ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs <a name="ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure_v3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs;

ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs.builder()
    .name(java.lang.String)
//  .privateIpVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#name ElastigroupAzureV3#name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs.property.privateIpVersion">privateIpVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#private_ip_version ElastigroupAzureV3#private_ip_version}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#name ElastigroupAzureV3#name}.

---

##### `privateIpVersion`<sup>Optional</sup> <a name="privateIpVersion" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs.property.privateIpVersion"></a>

```java
public java.lang.String getPrivateIpVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#private_ip_version ElastigroupAzureV3#private_ip_version}.

---

### ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup <a name="ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure_v3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup;

ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup.builder()
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#name ElastigroupAzureV3#name}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#resource_group_name ElastigroupAzureV3#resource_group_name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#name ElastigroupAzureV3#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#resource_group_name ElastigroupAzureV3#resource_group_name}.

---

### ElastigroupAzureV3Tags <a name="ElastigroupAzureV3Tags" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Tags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Tags.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure_v3.ElastigroupAzureV3Tags;

ElastigroupAzureV3Tags.builder()
    .key(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Tags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#key ElastigroupAzureV3#key}. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Tags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#value ElastigroupAzureV3#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Tags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#key ElastigroupAzureV3#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Tags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.168.1/docs/resources/elastigroup_azure_v3#value ElastigroupAzureV3#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ElastigroupAzureV3ImageCustomList <a name="ElastigroupAzureV3ImageCustomList" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure_v3.ElastigroupAzureV3ImageCustomList;

new ElastigroupAzureV3ImageCustomList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.get"></a>

```java
public ElastigroupAzureV3ImageCustomOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustom">ElastigroupAzureV3ImageCustom</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustom">ElastigroupAzureV3ImageCustom</a>>

---


### ElastigroupAzureV3ImageCustomOutputReference <a name="ElastigroupAzureV3ImageCustomOutputReference" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure_v3.ElastigroupAzureV3ImageCustomOutputReference;

new ElastigroupAzureV3ImageCustomOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.property.imageNameInput">imageNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.property.imageName">imageName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustom">ElastigroupAzureV3ImageCustom</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `imageNameInput`<sup>Optional</sup> <a name="imageNameInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.property.imageNameInput"></a>

```java
public java.lang.String getImageNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.property.imageName"></a>

```java
public java.lang.String getImageName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustom">ElastigroupAzureV3ImageCustom</a>

---


### ElastigroupAzureV3ImageList <a name="ElastigroupAzureV3ImageList" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure_v3.ElastigroupAzureV3ImageList;

new ElastigroupAzureV3ImageList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.get"></a>

```java
public ElastigroupAzureV3ImageOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Image">ElastigroupAzureV3Image</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Image">ElastigroupAzureV3Image</a>>

---


### ElastigroupAzureV3ImageMarketplaceList <a name="ElastigroupAzureV3ImageMarketplaceList" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure_v3.ElastigroupAzureV3ImageMarketplaceList;

new ElastigroupAzureV3ImageMarketplaceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.get"></a>

```java
public ElastigroupAzureV3ImageMarketplaceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplace">ElastigroupAzureV3ImageMarketplace</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplace">ElastigroupAzureV3ImageMarketplace</a>>

---


### ElastigroupAzureV3ImageMarketplaceOutputReference <a name="ElastigroupAzureV3ImageMarketplaceOutputReference" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure_v3.ElastigroupAzureV3ImageMarketplaceOutputReference;

new ElastigroupAzureV3ImageMarketplaceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.offerInput">offerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.publisherInput">publisherInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.skuInput">skuInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.offer">offer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.publisher">publisher</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.sku">sku</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplace">ElastigroupAzureV3ImageMarketplace</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `offerInput`<sup>Optional</sup> <a name="offerInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.offerInput"></a>

```java
public java.lang.String getOfferInput();
```

- *Type:* java.lang.String

---

##### `publisherInput`<sup>Optional</sup> <a name="publisherInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.publisherInput"></a>

```java
public java.lang.String getPublisherInput();
```

- *Type:* java.lang.String

---

##### `skuInput`<sup>Optional</sup> <a name="skuInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.skuInput"></a>

```java
public java.lang.String getSkuInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `offer`<sup>Required</sup> <a name="offer" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.offer"></a>

```java
public java.lang.String getOffer();
```

- *Type:* java.lang.String

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.publisher"></a>

```java
public java.lang.String getPublisher();
```

- *Type:* java.lang.String

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.sku"></a>

```java
public java.lang.String getSku();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplace">ElastigroupAzureV3ImageMarketplace</a>

---


### ElastigroupAzureV3ImageOutputReference <a name="ElastigroupAzureV3ImageOutputReference" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure_v3.ElastigroupAzureV3ImageOutputReference;

new ElastigroupAzureV3ImageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.putCustom">putCustom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.putMarketplace">putMarketplace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.resetCustom">resetCustom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.resetMarketplace">resetMarketplace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustom` <a name="putCustom" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.putCustom"></a>

```java
public void putCustom(IResolvable OR java.util.List<ElastigroupAzureV3ImageCustom> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.putCustom.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustom">ElastigroupAzureV3ImageCustom</a>>

---

##### `putMarketplace` <a name="putMarketplace" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.putMarketplace"></a>

```java
public void putMarketplace(IResolvable OR java.util.List<ElastigroupAzureV3ImageMarketplace> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.putMarketplace.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplace">ElastigroupAzureV3ImageMarketplace</a>>

---

##### `resetCustom` <a name="resetCustom" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.resetCustom"></a>

```java
public void resetCustom()
```

##### `resetMarketplace` <a name="resetMarketplace" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.resetMarketplace"></a>

```java
public void resetMarketplace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.property.custom">custom</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList">ElastigroupAzureV3ImageCustomList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.property.marketplace">marketplace</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList">ElastigroupAzureV3ImageMarketplaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.property.customInput">customInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustom">ElastigroupAzureV3ImageCustom</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.property.marketplaceInput">marketplaceInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplace">ElastigroupAzureV3ImageMarketplace</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Image">ElastigroupAzureV3Image</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `custom`<sup>Required</sup> <a name="custom" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.property.custom"></a>

```java
public ElastigroupAzureV3ImageCustomList getCustom();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustomList">ElastigroupAzureV3ImageCustomList</a>

---

##### `marketplace`<sup>Required</sup> <a name="marketplace" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.property.marketplace"></a>

```java
public ElastigroupAzureV3ImageMarketplaceList getMarketplace();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplaceList">ElastigroupAzureV3ImageMarketplaceList</a>

---

##### `customInput`<sup>Optional</sup> <a name="customInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.property.customInput"></a>

```java
public java.lang.Object getCustomInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageCustom">ElastigroupAzureV3ImageCustom</a>>

---

##### `marketplaceInput`<sup>Optional</sup> <a name="marketplaceInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.property.marketplaceInput"></a>

```java
public java.lang.Object getMarketplaceInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageMarketplace">ElastigroupAzureV3ImageMarketplace</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ImageOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Image">ElastigroupAzureV3Image</a>

---


### ElastigroupAzureV3LoginOutputReference <a name="ElastigroupAzureV3LoginOutputReference" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure_v3.ElastigroupAzureV3LoginOutputReference;

new ElastigroupAzureV3LoginOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.resetSshPublicKey">resetSshPublicKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetSshPublicKey` <a name="resetSshPublicKey" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.resetSshPublicKey"></a>

```java
public void resetSshPublicKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.property.sshPublicKeyInput">sshPublicKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.property.userNameInput">userNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.property.sshPublicKey">sshPublicKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.property.userName">userName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Login">ElastigroupAzureV3Login</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `sshPublicKeyInput`<sup>Optional</sup> <a name="sshPublicKeyInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.property.sshPublicKeyInput"></a>

```java
public java.lang.String getSshPublicKeyInput();
```

- *Type:* java.lang.String

---

##### `userNameInput`<sup>Optional</sup> <a name="userNameInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.property.userNameInput"></a>

```java
public java.lang.String getUserNameInput();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `sshPublicKey`<sup>Required</sup> <a name="sshPublicKey" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.property.sshPublicKey"></a>

```java
public java.lang.String getSshPublicKey();
```

- *Type:* java.lang.String

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.property.userName"></a>

```java
public java.lang.String getUserName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3LoginOutputReference.property.internalValue"></a>

```java
public ElastigroupAzureV3Login getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Login">ElastigroupAzureV3Login</a>

---


### ElastigroupAzureV3ManagedServiceIdentityList <a name="ElastigroupAzureV3ManagedServiceIdentityList" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure_v3.ElastigroupAzureV3ManagedServiceIdentityList;

new ElastigroupAzureV3ManagedServiceIdentityList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.get"></a>

```java
public ElastigroupAzureV3ManagedServiceIdentityOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentity">ElastigroupAzureV3ManagedServiceIdentity</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentity">ElastigroupAzureV3ManagedServiceIdentity</a>>

---


### ElastigroupAzureV3ManagedServiceIdentityOutputReference <a name="ElastigroupAzureV3ManagedServiceIdentityOutputReference" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure_v3.ElastigroupAzureV3ManagedServiceIdentityOutputReference;

new ElastigroupAzureV3ManagedServiceIdentityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentity">ElastigroupAzureV3ManagedServiceIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentityOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3ManagedServiceIdentity">ElastigroupAzureV3ManagedServiceIdentity</a>

---


### ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList <a name="ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure_v3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList;

new ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.get"></a>

```java
public ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs">ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs">ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs</a>>

---


### ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference <a name="ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure_v3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference;

new ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.resetPrivateIpVersion">resetPrivateIpVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrivateIpVersion` <a name="resetPrivateIpVersion" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.resetPrivateIpVersion"></a>

```java
public void resetPrivateIpVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.property.privateIpVersionInput">privateIpVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.property.privateIpVersion">privateIpVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs">ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `privateIpVersionInput`<sup>Optional</sup> <a name="privateIpVersionInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.property.privateIpVersionInput"></a>

```java
public java.lang.String getPrivateIpVersionInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `privateIpVersion`<sup>Required</sup> <a name="privateIpVersion" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.property.privateIpVersion"></a>

```java
public java.lang.String getPrivateIpVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs">ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs</a>

---


### ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList <a name="ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure_v3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList;

new ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.get"></a>

```java
public ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup">ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup">ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup</a>>

---


### ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference <a name="ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure_v3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference;

new ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup">ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup">ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup</a>

---


### ElastigroupAzureV3NetworkNetworkInterfacesList <a name="ElastigroupAzureV3NetworkNetworkInterfacesList" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure_v3.ElastigroupAzureV3NetworkNetworkInterfacesList;

new ElastigroupAzureV3NetworkNetworkInterfacesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.get"></a>

```java
public ElastigroupAzureV3NetworkNetworkInterfacesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfaces">ElastigroupAzureV3NetworkNetworkInterfaces</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfaces">ElastigroupAzureV3NetworkNetworkInterfaces</a>>

---


### ElastigroupAzureV3NetworkNetworkInterfacesOutputReference <a name="ElastigroupAzureV3NetworkNetworkInterfacesOutputReference" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure_v3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference;

new ElastigroupAzureV3NetworkNetworkInterfacesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.putAdditionalIpConfigs">putAdditionalIpConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.putApplicationSecurityGroup">putApplicationSecurityGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.resetAdditionalIpConfigs">resetAdditionalIpConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.resetApplicationSecurityGroup">resetApplicationSecurityGroup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAdditionalIpConfigs` <a name="putAdditionalIpConfigs" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.putAdditionalIpConfigs"></a>

```java
public void putAdditionalIpConfigs(IResolvable OR java.util.List<ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.putAdditionalIpConfigs.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs">ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs</a>>

---

##### `putApplicationSecurityGroup` <a name="putApplicationSecurityGroup" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.putApplicationSecurityGroup"></a>

```java
public void putApplicationSecurityGroup(IResolvable OR java.util.List<ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.putApplicationSecurityGroup.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup">ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup</a>>

---

##### `resetAdditionalIpConfigs` <a name="resetAdditionalIpConfigs" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.resetAdditionalIpConfigs"></a>

```java
public void resetAdditionalIpConfigs()
```

##### `resetApplicationSecurityGroup` <a name="resetApplicationSecurityGroup" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.resetApplicationSecurityGroup"></a>

```java
public void resetApplicationSecurityGroup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.additionalIpConfigs">additionalIpConfigs</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList">ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.applicationSecurityGroup">applicationSecurityGroup</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList">ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.additionalIpConfigsInput">additionalIpConfigsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs">ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.applicationSecurityGroupInput">applicationSecurityGroupInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup">ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.assignPublicIpInput">assignPublicIpInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.isPrimaryInput">isPrimaryInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.subnetNameInput">subnetNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.assignPublicIp">assignPublicIp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.isPrimary">isPrimary</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.subnetName">subnetName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfaces">ElastigroupAzureV3NetworkNetworkInterfaces</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `additionalIpConfigs`<sup>Required</sup> <a name="additionalIpConfigs" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.additionalIpConfigs"></a>

```java
public ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList getAdditionalIpConfigs();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList">ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigsList</a>

---

##### `applicationSecurityGroup`<sup>Required</sup> <a name="applicationSecurityGroup" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.applicationSecurityGroup"></a>

```java
public ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList getApplicationSecurityGroup();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList">ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroupList</a>

---

##### `additionalIpConfigsInput`<sup>Optional</sup> <a name="additionalIpConfigsInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.additionalIpConfigsInput"></a>

```java
public java.lang.Object getAdditionalIpConfigsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs">ElastigroupAzureV3NetworkNetworkInterfacesAdditionalIpConfigs</a>>

---

##### `applicationSecurityGroupInput`<sup>Optional</sup> <a name="applicationSecurityGroupInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.applicationSecurityGroupInput"></a>

```java
public java.lang.Object getApplicationSecurityGroupInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup">ElastigroupAzureV3NetworkNetworkInterfacesApplicationSecurityGroup</a>>

---

##### `assignPublicIpInput`<sup>Optional</sup> <a name="assignPublicIpInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.assignPublicIpInput"></a>

```java
public java.lang.Object getAssignPublicIpInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isPrimaryInput`<sup>Optional</sup> <a name="isPrimaryInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.isPrimaryInput"></a>

```java
public java.lang.Object getIsPrimaryInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `subnetNameInput`<sup>Optional</sup> <a name="subnetNameInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.subnetNameInput"></a>

```java
public java.lang.String getSubnetNameInput();
```

- *Type:* java.lang.String

---

##### `assignPublicIp`<sup>Required</sup> <a name="assignPublicIp" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.assignPublicIp"></a>

```java
public java.lang.Object getAssignPublicIp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isPrimary`<sup>Required</sup> <a name="isPrimary" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.isPrimary"></a>

```java
public java.lang.Object getIsPrimary();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `subnetName`<sup>Required</sup> <a name="subnetName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.subnetName"></a>

```java
public java.lang.String getSubnetName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfaces">ElastigroupAzureV3NetworkNetworkInterfaces</a>

---


### ElastigroupAzureV3NetworkOutputReference <a name="ElastigroupAzureV3NetworkOutputReference" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure_v3.ElastigroupAzureV3NetworkOutputReference;

new ElastigroupAzureV3NetworkOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.putNetworkInterfaces">putNetworkInterfaces</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNetworkInterfaces` <a name="putNetworkInterfaces" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.putNetworkInterfaces"></a>

```java
public void putNetworkInterfaces(IResolvable OR java.util.List<ElastigroupAzureV3NetworkNetworkInterfaces> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.putNetworkInterfaces.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfaces">ElastigroupAzureV3NetworkNetworkInterfaces</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.property.networkInterfaces">networkInterfaces</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList">ElastigroupAzureV3NetworkNetworkInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.property.networkInterfacesInput">networkInterfacesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfaces">ElastigroupAzureV3NetworkNetworkInterfaces</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.property.virtualNetworkNameInput">virtualNetworkNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.property.virtualNetworkName">virtualNetworkName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Network">ElastigroupAzureV3Network</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `networkInterfaces`<sup>Required</sup> <a name="networkInterfaces" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.property.networkInterfaces"></a>

```java
public ElastigroupAzureV3NetworkNetworkInterfacesList getNetworkInterfaces();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfacesList">ElastigroupAzureV3NetworkNetworkInterfacesList</a>

---

##### `networkInterfacesInput`<sup>Optional</sup> <a name="networkInterfacesInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.property.networkInterfacesInput"></a>

```java
public java.lang.Object getNetworkInterfacesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkNetworkInterfaces">ElastigroupAzureV3NetworkNetworkInterfaces</a>>

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `virtualNetworkNameInput`<sup>Optional</sup> <a name="virtualNetworkNameInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.property.virtualNetworkNameInput"></a>

```java
public java.lang.String getVirtualNetworkNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `virtualNetworkName`<sup>Required</sup> <a name="virtualNetworkName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.property.virtualNetworkName"></a>

```java
public java.lang.String getVirtualNetworkName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3NetworkOutputReference.property.internalValue"></a>

```java
public ElastigroupAzureV3Network getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Network">ElastigroupAzureV3Network</a>

---


### ElastigroupAzureV3TagsList <a name="ElastigroupAzureV3TagsList" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure_v3.ElastigroupAzureV3TagsList;

new ElastigroupAzureV3TagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.get"></a>

```java
public ElastigroupAzureV3TagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Tags">ElastigroupAzureV3Tags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Tags">ElastigroupAzureV3Tags</a>>

---


### ElastigroupAzureV3TagsOutputReference <a name="ElastigroupAzureV3TagsOutputReference" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.elastigroup_azure_v3.ElastigroupAzureV3TagsOutputReference;

new ElastigroupAzureV3TagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Tags">ElastigroupAzureV3Tags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3TagsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.elastigroupAzureV3.ElastigroupAzureV3Tags">ElastigroupAzureV3Tags</a>

---



